const state = {
    selected: undefined,
    accounts: [
        
    ]
};

const getters = {
    selected: state => state.selected,
    list: (state, getters, rootState, rootGetters) => {
        const network = rootGetters['networks/selected'];

        return state.accounts.filter(account => account.network === network.url);
    }
};

const actions = {
    SelectAccount({ commit, state, rootGetters }, { address }) {
        const network = rootGetters['networks/selected'];

        if (network.url === undefined) {
            throw Error('Network not selected');
        }

        const account = state.accounts.find(function (item) {
            return (item.network === network.url && item.address === address)
        });

        if (account === undefined) {
            throw Error('Account does not exist on network.');
        }

        commit('setAccount', account);
    },
    AddAccount({ commit, state, rootGetters }, account) {
        const network = rootGetters['networks/selected'];

        if (network.url === undefined) {
            throw Error('Network not selected');
        }

        const exists = state.accounts.find(function (item) {
            return (item.network === network.url && item.address === account.address)
        });

        if (exists !== undefined) {
            throw Error('Account already exists on network.');
        }

        commit('addAccount', { ...account, network: network.url })
    }
};


const mutations = {
    setAccount(state, payload) {
        state.selected = payload;
    },
    addAccount(state, payload) {
        state.accounts.push(payload);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}