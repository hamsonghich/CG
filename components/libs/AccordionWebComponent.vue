<template>
  <div class="wrapper-collapse">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" role="tab">
        <b-button class="button-collapse"
                  block v-b-toggle="'collapse-' + id"
        >
          <div class="when-opened w-100">
            <div class="d-flex justify-content-between align-items-center">
              <nuxt-link :to="/product/+ titleLink">
                <span class="text--14 font--medium" style="position:relative;">
                    {{ titleHeader }} <span style="position: absolute; top: -6px;
                        right: -15px" class="count">{{ list?.length }}</span>
                </span>
              </nuxt-link>
              <i class="fa-solid fa-angle-down"></i>
            </div>

          </div>
          <div class="when-closed  w-100">
            <div class="d-flex justify-content-between align-items-center">
              <nuxt-link :to="/product/+ titleLink">
                 <span class="text--14 font--medium" style="position:relative;">
                    {{ titleHeader }} <span style="position: absolute; top: -6px;
                        right: -15px" class="count">{{ list?.length }}</span>
                </span>
              </nuxt-link>
              <i class="fa-solid fa-angle-up"></i>
            </div>

          </div>

        </b-button>
      </b-card-header>
      <b-collapse class="wrapper-collapse-child" :id="`collapse-${id}`" visible accordion="my-accordion"
                  role="tabpanel">
        <div v-if="content">
          <b-card>
            <div class="text--14 font--medium ml--2">
              {{ content }}
            </div>
          </b-card>

        </div>
        <div v-if="list">
          <b-card v-for="(item, index) in list" :key="index">
            <i class="fa-solid fa-minus mr--1"></i>
            <nuxt-link :to="/product-sub/+ item.link">
                 <span class="text--14 font--medium">
                   {{ item.name }} </span>
            </nuxt-link>
          </b-card>
        </div>

      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
      required: true
    },
    titleHeader: {
      type: String,
      default: 'Header',
      required: false
    },
    titleLink: {
      type: String,
      default: 'Header',
      required: false
    },
    content: {
      type: String,
      required: false
    },
    list: {
      type: Array,
      required: false
    }

  }
}

</script>

<style scoped lang="scss">
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}

.wrapper-collapse {
  .not-collapsed {
    font-weight: 400;

    span {
      font-size: calc(14 / 16 * 1rem);
      color: $color-primary;

      .count {
        font-size: 0.8rem;
        color: $color-text-red;
      }
    }

    i {
      font-size: 1.05rem;
      color: $color-primary;
    }
  }

  .card {
    border: none;
  }

  .card-header {
    padding: 0.2rem 0.75rem;
    background: none;
    border: none;
    //border-bottom: 1px solid #f1f1f1;
  }

  a {
    color: $color-primary;
    font-size: 14px;
    text-decoration: none;
  }


  .count {
    color: $color-text-red;
    padding-bottom: 5px;
    font-size: 0.65rem;
  }

  ::v-deep .button-collapse {
    width: 100% !important;
    cursor: pointer;
    padding: calc(4 / 16 * 1rem);
    background: none;
    border: none;
    color: $color-primary;
  }

  ::v-deep .button-collapse:focus-visible, ::v-deep .button-collapse:focus {
    background: none;
    border: none;
    box-shadow: none !important;
  }

  .wrapper-collapse-child {
    .card {
      border: none;
      border-radius: 0;

      .card-body {
        padding: 0.5rem;
        border-top: 1px solid #f1f1f1;

        .count {
          font-size: 0.8rem;
          color: $color-text-red;
        }
      }
    }
  }
}
</style>
