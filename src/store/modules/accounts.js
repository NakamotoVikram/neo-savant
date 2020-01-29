const state = {
    selected: null,
    accounts: [
        {
            address: "7bb3b0e8a59f3f61d9bff038f4aeb42cae2ecce8",
            privateKey: "db11cfa086b92497c8ed5a4cc6edb3a5bfe3a640c43ffb9fc6aa0873c56f2ee3",
            network: 'http://35.246.141.209:5555/',
            type: 'keystore'
        }, {
            address: "d90f2e538ce0df89c8273cad3b63ec44a3c4ed82",
            privateKey: "e53d1c3edaffc7a7bab5418eb836cf75819a82872b4a1a0f1c7fcf5c3e020b89",
            network: 'http://35.246.141.209:5555/',
            type: 'keystore'
        },
        {
            address: "381f4008505e940ad7681ec3468a719060caf796",
            privateKey: "d96e9eb5b782a80ea153c937fa83e5948485fbfc8b7e7c069d7b914dbc350aba",
            network: 'http://35.246.141.209:5555/',
            type: 'keystore'
        },
        {
            address: "b028055ea3bc78d759d10663da40d171dec992aa",
            privateKey: "e7f59a4beb997a02a13e0d5e025b39a6f0adc64d37bb1e6a849a4863b4680411"
        },
        {
            address: "f6dad9e193fa2959a849b81caf9cb6ecde466771",
            privateKey: "589417286a3213dceb37f8f89bd164c3505a4cec9200c61f7c6db13a30a71b45",
            network: 'http://35.246.141.209:5555/',
            type: 'keystore'
        },
        {
            address: "10200e3da08ee88729469d6eabc055cb225821e7",
            privateKey: "5430365143ce0154b682301d0ab731897221906a7054bbf5bd83c7663a6cbc40",
            network: 'http://35.246.141.209:5555/',
            type: 'keystore'
        }
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