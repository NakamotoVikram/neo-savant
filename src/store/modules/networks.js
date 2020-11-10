const state = {
    selected: undefined,
    networks: [
        {
            name: 'Simulated ENV',
            url: process.env.VUE_APP_ISOLATED_URL,
            faucet: process.env.VUE_APP_ISOLATED_FAUCET,
            type: 'default',
            chainId: 222,
            msgVersion: 1
        },
        {
            name: 'Testnet',
            url: 'https://dev-api.zilliqa.com',
            faucet: process.env.VUE_APP_TESTNET_FAUCET,
            type: 'default',
            chainId: 333,
            msgVersion: 1
        },
        {
            name: 'Mainnet',
            url: 'https://api.zilliqa.com',
            type: 'default',
            chainId: 1,
            msgVersion: 1
        }
    ]
};

const getters = {
    selected: state => state.selected,
    list: state => state.networks
};

const actions = {
    SelectNetwork({ commit, state }, { url }) {
        const network = state.networks.find(function (item) {
            return item.url === url
        });

        commit('setNetwork', network);
        commit('accounts/setAccount', undefined, { root: true });
        window.EventBus.$emit('refresh-balance');
    },
    AddNetwork({ commit, state, dispatch }, networkDetails) {

        return new Promise((resolve) => {
            if (state.networks.find(item => item.url === networkDetails.url) !== undefined) {
                throw new Error(`Network with address ${networkDetails.url} already exists.`);
            }

            commit('addNetwork', networkDetails)
            dispatch('SelectNetwork', networkDetails);
            resolve(networkDetails);
        });

    },
    RemoveNetwork({ commit, state }, networkDetails) {
        commit('setNetwork', state.networks[0]);
        const networkIndex = state.networks.findIndex(item => item.url === networkDetails.url);

        if (networkIndex !== -1) {
            commit('removeNetwork', networkIndex);
        }
    }
};


const mutations = {
    setNetwork(state, payload) {
        state.selected = payload;
    },
    addNetwork(state, payload) {
        state.networks.push(payload);
    },
    removeNetwork(state, index) {
        state.networks.splice(index, 1);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
