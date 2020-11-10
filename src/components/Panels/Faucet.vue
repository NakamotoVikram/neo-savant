<template>
  <div class="panel-content">
    <div class="header">
      <div class="title">Faucet Request</div>
      <img
        src="@/assets/close-color.svg"
        @click="handleClose"
        class="close-button-new"
      />
    </div>
    <div class="body p-4">
      <div class="account-selector">
        <div class="deploy-form" v-if="!loading && !success">
          <div class="row">
            <div class="col-12">
              <p class="font-weight-bold">
                Request funds from {{ network.name }} Network
              </p>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col-12">
              <label>Account address</label>
              <input type="text" v-model="address" class="form-control" />
            </div>
          </div>

          <div class="row">
            <div class="col-12 mb-4" v-if="!loading">
              <button class="btn btn-secondary mr-2" @click="handleRequest">
                Request Funds
              </button>
            </div>
          </div>
        </div>

        <div class="alert alert-info" v-if="loading">{{ loading }}</div>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>

        <div class="alert alert-success" v-if="success">
          Funds successfully requested.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      address: "",
      loading: false,
      error: false,
      success: false,
      contractCode: undefined,
    };
  },
  components: {},
  computed: {
    ...mapGetters("accounts", { account: "selected" }),
    ...mapGetters("contracts", { contract: "selected" }),
    ...mapGetters("networks", { network: "selected" }),
  },
  mounted() {
    if (this.account !== undefined) {
      this.address = this.account.address;
    }
  },
  methods: {
    handleClose() {
      window.EventBus.$emit("close-right-panel");
    },
    reset() {
      this.loading = false;
      this.error = false;
      this.success = false;
      this.address = "";
      this.contractCode = undefined;
    },
    async handleRequest() {
      let API_LINK = this.network.faucet
        ? this.network.faucet + "/request-funds"
        : undefined;

      if (API_LINK === undefined) {
        API_LINK =
          this.network.url === process.env.VUE_APP_ISOLATED_URL
            ? process.env.VUE_APP_ISOLATED_FAUCET + "request-funds"
            : process.env.VUE_APP_TESTNET_FAUCET;
      }

      return axios
        .post(API_LINK, {
          address: this.address,
          token: "SAVANT-IDE-CALL",
        })
        .then(async (response) => {
          if (response.data.success === true) {
            this.success = true;
            this.$notify({
              group: "scilla",
              type: "success",
              position: "bottom right",
              title: "Faucet call",
              text: "Funds successfully requested.",
            });
            this.handleClose();
            return window.EventBus.$emit("refresh-balance");
          } else {
            this.$notify({
              group: "scilla",
              type: "error",
              position: "bottom right",
              title: "Faucet call error",
              text: `${response.data.error}`,
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.accounts-list {
  .item {
    border: 1px dashed #ccc;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}

.btn {
  font-size: 0.85rem !important;

  &.faded {
    opacity: 0.5;
  }
}
</style>