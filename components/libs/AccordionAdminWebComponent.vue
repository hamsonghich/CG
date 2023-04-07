<template>
  <div class="wrapper-collapse">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" role="tab">
        <b-button class="button-collapse"
                  block v-b-toggle="'collapse-' + id"
        >
          <div class="when-opened w-100">
            <div class="d-flex justify-content-between align-items-center">
              <nuxt-link :to="/product/+ titleLink" class="d-flex">
                <i class="fa-solid fa-database mr--2"></i>
                <span class="text--14 font--medium" style="position:relative;">
                    {{ titleHeader }} <span style="position: absolute; top: -6px;
                        right: -15px" class="count">{{ list?.length }}</span>
                </span>
                <span style="font-size: calc(10/16 * 1rem)"
                      class="color-text-warning font--semibold ml--10">{{ keyId }}</span>
              </nuxt-link>


              <div class="d-flex align-items-center">
                <div class="wrapper-btn-edit-delete-level-1 mr--5 d-flex">

                  <button class="btn-icon d-flex" @click="sortNameProductLevel2(keyId)">
                    <i class="fa-solid fa-arrow-up-9-1 color-text-admin text--10"></i>
                    <i class="fa-light fa-signature color-text-admin text--10"></i>
                  </button>
                  <button class="btn-icon d-flex mr--3" @click="sortDateProductLevel2(keyId)">
                    <i class="fa-solid fa-arrow-up-9-1 color-text-admin text--10"></i>
                    <i class="fa-regular fa-calendar-days color-text-admin text--10"></i>
                  </button>

                  <!--                  button add level 2-->
                  <button class="btn-icon" @click="openModalAddLevel2()">
                    <i class="fa-solid fa-circle-plus  color-text-primary text--13 font--medium"></i>
                  </button>
                  <!--                  button edit level 1-->
                  <button class="btn-icon" @click="openModalEditLevel1(keyId)">
                    <i class="fa-regular fa-pen-to-square color-text-orange"></i>
                  </button>
                  <!--                  button delete level 1-->
                  <button class="btn-icon" @click="openModalDelete('level1', null)">
                    <i class="fa-solid fa-trash color-text-warning"></i>
                  </button>
                </div>
                <i class="fa-solid fa-angle-down"></i>
              </div>

            </div>

          </div>
          <div class="when-closed  w-100">
            <div class="d-flex justify-content-between align-items-center">
              <nuxt-link :to="/product/+ titleLink">
                <i class="fa-solid fa-database mr--2"></i>
                <span class="text--14 font--medium" style="position:relative;">
                    {{ titleHeader }} <span style="position: absolute; top: -6px;
                        right: -15px" class="count">{{ list?.length }}</span>
                </span>
                <span style="font-size: calc(10/16 * 1rem)"
                      class="color-text-warning font--semibold ml--10">{{ keyId }}</span>
              </nuxt-link>
              <i class="fa-solid fa-angle-up"></i>
            </div>

          </div>

        </b-button>
      </b-card-header>
      <b-collapse class="wrapper-collapse-child" :id="`collapse-${id}`" accordion="my-accordion"
                  role="tabpanel">
        <div v-if="content">
          <b-card>
            <div class="text--14 font--medium ml--2">
              {{ content }}
            </div>
          </b-card>

        </div>
        <div v-if="list">

          <b-card no-body class="mb-1" v-for="(itemC, indexC) in list" :key="indexC">
            <b-card-header header-tag="header" class="p-1" role="tab" header-class="d-flex justify-content-between">
              <b-button class="button-collapse ml--5 font--medium text--13 d-flex justify-content-start" block
                        v-b-toggle="'accordion-child-'+indexC" variant="info"
                        @click="getKeyProductLevel2(itemC.key)"
              >
                <i class="fa-regular fa-folder-open mr--2 text--12 color-primary"></i>
                <div style="position:relative;">{{ itemC.name }} <span style="position: absolute; top: -6px;
                        right: -15px; font-size: 10px !important;" class="count text--8">{{ itemC['product-details']?.length }}</span></div>
                <span style="font-size: calc(10/16 * 1rem)"
                      class="color-text-warning font--semibold ml--10">{{ itemC.key }}</span>
              </b-button>


              <div class="d-flex align-items-center mr--7">
                <div class="d-flex align-items-center wrapper-btn-edit-delete-level-2 mr--10">
<!--dang sua-->
                  <button class="btn-icon d-flex" @click="sortNameProductLevel3(itemC.key)">
                    <i class="fa-solid fa-arrow-up-9-1 color-text-admin text--10"></i>
                    <i class="fa-light fa-signature color-text-admin text--10"></i>
                  </button>
                  <button class="btn-icon d-flex mr--3" @click="sortDateProductLevel3(itemC.key)">
                    <i class="fa-solid fa-arrow-up-9-1 color-text-admin text--10"></i>
                    <i class="fa-regular fa-calendar-days color-text-admin text--10"></i>
                  </button>

                  <!--                  button add level 3-->
                  <button class="btn-icon" @click="openModalAddLevel3(itemC.key)">
                    <i class="fa-solid fa-circle-plus  color-text-admin text--13 font--medium"></i>
                  </button>
                  <!--                  button edit level 2-->
                  <button class="btn-icon" @click="openModalEditLevel2(itemC)">
                    <i class="fa-regular fa-pen-to-square color-text-primary font--medium text--13"></i>
                  </button>
                  <!--                  button delete level 2-->
                  <button class="btn-icon" @click="openModalDelete('level2', itemC)">
                    <i class="fa-solid fa-trash color-text-primary font--medium text--13"></i>
                  </button>
                </div>

              </div>

            </b-card-header>
            <b-collapse class="accordion-collapse-child" :id="`accordion-child-${indexC}`"
                        accordion="my-accordion-child" role="tabpanel">
              <b-card-body>
                <b-card v-for="(itemD, indexD) in itemC?.['product-details']" :key="indexD">
                  <div class="d-flex justify-content-between align-items-center">
                    <nuxt-link :to="/product-sub/+ itemD.link">
                      <i class="fa-duotone fa-right-from-bracket mr--2"></i>
                      <span class="text--14 font--medium">
                   {{ itemD.name }}
                      <span style="font-size: calc(10/16 * 1rem)"
                            class="color-text-warning font--semibold ml--10">{{ itemD.key }}</span>
                    </span>
                    </nuxt-link>
                    <div class="d-flex align-items-center mr--7">
                      <div class="d-flex wrapper-btn-edit-delete-level-3 mr--15">

                        <!--                  button edit level 3-->
                        <button class="btn-icon" @click="openModalEditLevel3(itemD)">
                          <i class="fa-regular fa-pen-to-square color-text-admin font--medium text--12"></i>
                        </button>
                        <!--                  button delete level 3-->
                        <button class="btn-icon" @click="openModalDelete('level3', itemD)">
                          <i class="fa-solid fa-trash color-primary font--medium text--12"></i>
                        </button>
                      </div>

                    </div>
                  </div>

                </b-card>
              </b-card-body>
            </b-collapse>
          </b-card>

        </div>

      </b-collapse>
    </b-card>


    <ModalDeleteWebComponent
      :text-content="textContentModalDelete"
      @emitCancelDelete="emitCancelDelete"
      @emitSubmitDelete="emitSubmitDelete"
      :showModalDelete="showModalDelete"
    />

    <!--    MODAL EDIT LEVEL 1-->
    <b-modal ref="modal-edit-level-1" centered hide-footer :title="`Edit form product level 1`">
      <div class="d-block text-center">
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập tên'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputNameEditLv1"
          :float-label="'Nhập tên'"
          icon-prepend="fa-duotone fa-file-signature"
          :value-prop="this.dataFormLevel1?.name"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập link'"
          :prepend-option="true"
          :float-label="'Nhập link'"
          icon-prepend="fa-regular fa-link"
          :is-disabled="true"
          :value-prop="this.dataFormLevel1?.link"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập key'"
          :prepend-option="true"
          :float-label="'Nhập key'"
          icon-prepend="fa-duotone fa-key"
          :is-disabled="true"
          :value-prop="this.dataFormLevel1?.key"
        />
      </div>
      <div class="d-flex justify-content-end align-items-center mt--4">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-edit-level-1'].hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormEditLevel1"
          :textContent="'Submit'"
        />
      </div>
    </b-modal>

    <!--    MODAL ADD LEVEL 2-->
    <b-modal ref="modal-add-level-2" centered hide-footer :title="`Add form product level 2`">
      <div class="d-block text-center">
        <InputWebComponent
          :autofocus="true"
          :option-input="''"
          :placeholder="'Nhập tên'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputNameAddLv2"
          :float-label="'Nhập tên'"
          icon-prepend="fa-duotone fa-file-signature"
          @keyUpEnter="() => this.submitFormAddLevel2()"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập link'"
          :prepend-option="true"
          :float-label="'Nhập link'"
          icon-prepend="fa-regular fa-link"
          :is-disabled="true"
          :value-prop="this.dataFormLevel2?.link"
        />
      </div>
      <div class="d-flex justify-content-end align-items-center mt--4">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-add-level-2']?.hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormAddLevel2"
          :textContent="'Submit'"
        />
      </div>
    </b-modal>

    <!--    MODAL EDIT LEVEL 2-->
    <b-modal ref="modal-edit-level-2" centered hide-footer :title="`Edit form product level 2`">
      <div class="d-block text-center">
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập tên'"
          :prepend-option="true"
          @valueInputEmit="fnValueInputNameEditLv2"
          :float-label="'Nhập tên'"
          icon-prepend="fa-duotone fa-file-signature"
          :value-prop="this.dataFormLevel2?.name"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập link'"
          :prepend-option="true"
          :float-label="'Nhập link'"
          icon-prepend="fa-regular fa-link"
          :is-disabled="true"
          :value-prop="this.dataFormLevel2?.link"
        />
        <InputWebComponent
          :option-input="''"
          :placeholder="'Nhập key'"
          :prepend-option="true"
          :float-label="'Nhập key'"
          icon-prepend="fa-duotone fa-key"
          :is-disabled="true"
          :value-prop="this.dataFormLevel2?.key"
        />
      </div>
      <div class="d-flex justify-content-end align-items-center mt--4">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-edit-level-2']?.hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormEditLevel2"
          :textContent="'Submit'"
        />
      </div>
    </b-modal>

    <!--    MODAL ADD LEVEL 3-->
    <b-modal ref="modal-add-level-3" size="lg" centered hide-footer
             :title="`Add form product level 3 (product details)`">
      <div class="d-block text-center">
        <div class="d-flex justify-content-between align-items-center" style="gap: 1rem">
          <InputWebComponent
            :autofocus="true"
            :option-input="''"
            :placeholder="'Nhập tên'"
            :prepend-option="true"
            @valueInputEmit="fnValueInputNameEditLv3"
            :float-label="'Nhập tên'"
            icon-prepend="fa-duotone fa-file-signature"
            :value-prop="this.dataFormLevel3?.name"
            :class="'w-100'"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập link'"
            :prepend-option="true"
            :float-label="'Nhập link'"
            icon-prepend="fa-regular fa-link"
            :is-disabled="true"
            :value-prop="this.dataFormLevel3?.link"
            :class="'w-100'"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập chức năng tiêu đề sản phẩm'"
            :prepend-option="true"
            :float-label="'Nhập chức năng tiêu đề sản phẩm'"
            icon-prepend="fa-duotone fa-h1"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'sub-title-default')"
            :class="'w-100'"
          />
        </div>
        <div class="d-flex justify-content-between align-items-center" style="gap: 1rem">
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập số đánh giá'"
            :prepend-option="true"
            :float-label="'Nhập số đánh giá'"
            icon-prepend="fa-solid fa-face-smile"
            :class="'w-100'"
            :type="'number'"
            :value-prop="'200'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'rate')"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập số sao'"
            :prepend-option="true"
            :float-label="'Nhập số sao'"
            icon-prepend="fa-solid fa-star"
            :class="'w-100'"
            :type="'number'"
            :value-prop="'4.5'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'star')"
          />
          <InputCurrencyWebComponent
            :option-input="''"
            :placeholder="'Nhập giá tiền gốc'"
            :prepend-option="true"
            :float-label="'Nhập giá tiền gốc'"
            icon-prepend="fa-solid fa-dong-sign"
            :class="'w-100'"
            :value-prop="'500000'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'price-old')"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập số giảm giá'"
            :prepend-option="true"
            :float-label="'Nhập số giảm giá'"
            icon-prepend="fa-solid fa-percent"
            :class="'w-100'"
            :type="'number'"
            :value-prop="'10'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'discount')"
          />
          <InputCurrencyWebComponent
            :option-input="''"
            :placeholder="'Giá tiền mới'"
            :prepend-option="true"
            :float-label="'Giá tiền mới'"
            icon-prepend="fa-solid fa-dong-sign"
            :class="'w-100'"
            :value-prop="dataFormLevel3['price-new']"
            :is-disabled="true"
          />


        </div>
        <div class="d-flex justify-content-between align-items-center" style="gap: 1rem">
          <MultiselectWebComponent
            :placeholder="'Chọn tag description ?'"
            :label="'name'"
            :track-by="'value'"
            :options="_dataTagDescription"
            :class="'w-100'"
            @emmitValue="fnEmmitValueMultiselect"
          />
          <button class="btn-icon" @click="openModalTagDes">
            <i class="fa-solid fa-circle-plus"></i>
          </button>
        </div>

        <div class="d-flex flex-wrap">
          <i class="text-10 font--semibold">Danh sách ảnh sản phẩm 1</i>
          <VueEditor class="text--10 mb--4" placeholder="Danh sách mô tả tóm tắt sản phẩm"
                     v-model="dataFormLevel3.listImg"/>

          <i class="text-10 font--semibold">Danh sách mô tả tóm tắt sản phẩm</i>
          <VueEditor class="text--10 mb--4" placeholder="Danh sách mô tả tóm tắt sản phẩm"
                     v-model="dataFormLevel3.content"/>

          <i class="text-10 font--semibold">Danh sách ưu đãi sản phẩm</i>
          <VueEditor class="text--10 mb--4" placeholder="Danh sách ưu đãi sản phẩm"
                     v-model="dataFormLevel3.promotion"/>

          <i class="text-10 font--semibold">Thông tin chi tiết sản phẩm</i>
          <VueEditor class="text--10 mb--4" placeholder="Thông tin chi tiết sản phẩm"
                     v-model="dataFormLevel3.infoDetails"/>
        </div>

      </div>
      <div class="d-flex justify-content-end align-items-center mt--4">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-add-level-3']?.hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormAddLevel3"
          :textContent="'Submit'"
        />
      </div>
    </b-modal>

    <!--    MODAL EDIT LEVEL 3-->
    <b-modal ref="modal-edit-level-3" size="lg" centered hide-footer
             :title="`Edit form product level 3 (product details)`">
      <div class="d-block text-center">
        <div class="d-flex justify-content-between align-items-center" style="gap: 1rem">
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập tên'"
            :prepend-option="true"
            @valueInputEmit="fnValueInputNameEditLv3"
            :float-label="'Nhập tên'"
            icon-prepend="fa-duotone fa-file-signature"
            :value-prop="this.dataFormLevel3?.name"
            :class="'w-100'"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập link'"
            :prepend-option="true"
            :float-label="'Nhập link'"
            icon-prepend="fa-regular fa-link"
            :is-disabled="true"
            :value-prop="this.dataFormLevel3?.link"
            :class="'w-100'"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập chức năng tiêu đề sản phẩm'"
            :prepend-option="true"
            :float-label="'Nhập chức năng tiêu đề sản phẩm'"
            icon-prepend="fa-duotone fa-h1"
            :value-prop="this.dataFormLevel3['sub-title-default']"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'sub-title-default')"
            :class="'w-100'"
          />
        </div>
        <div class="d-flex justify-content-between align-items-center" style="gap: 1rem">
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập số đánh giá'"
            :prepend-option="true"
            :float-label="'Nhập số đánh giá'"
            icon-prepend="fa-solid fa-face-smile"
            :class="'w-100'"
            :type="'number'"
            :value-prop="'200'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'rate')"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập số sao'"
            :prepend-option="true"
            :float-label="'Nhập số sao'"
            icon-prepend="fa-solid fa-star"
            :class="'w-100'"
            :type="'number'"
            :value-prop="'4.5'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'star')"
          />
          <InputCurrencyWebComponent
            :option-input="''"
            :placeholder="'Nhập giá tiền gốc'"
            :prepend-option="true"
            :float-label="'Nhập giá tiền gốc'"
            icon-prepend="fa-solid fa-dong-sign"
            :class="'w-100'"
            :value-prop="'500000'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'price-old')"
          />
          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập số giảm giá'"
            :prepend-option="true"
            :float-label="'Nhập số giảm giá'"
            icon-prepend="fa-solid fa-percent"
            :class="'w-100'"
            :type="'number'"
            :value-prop="'10'"
            @valueInputEmit="(emmit) => updateDataFormLevel3(emmit,'discount')"
          />
          <InputCurrencyWebComponent
            :option-input="''"
            :placeholder="'Giá tiền mới'"
            :prepend-option="true"
            :float-label="'Giá tiền mới'"
            icon-prepend="fa-solid fa-dong-sign"
            :class="'w-100'"
            :value-prop="dataFormLevel3['price-new']"
            :is-disabled="true"
          />


        </div>
        <div class="d-flex justify-content-between align-items-center" style="gap: 1rem">
          <MultiselectWebComponent
            :placeholder="'Chọn tag description ?'"
            :label="'name'"
            :track-by="'value'"
            :options="_dataTagDescription"
            :class="'w-100'"
            @emmitValue="fnEmmitValueMultiselect"
            :value-prop="this.dataFormLevel3.tagDescription"
          />
          <button class="btn-icon" @click="openModalTagDes">
            <i class="fa-solid fa-circle-plus"></i>
          </button>
        </div>

        <div class="d-flex flex-wrap">
          <i class="text-10 font--semibold">Danh sách ảnh sản phẩm 1</i>
          <VueEditor class="text--10 mb--4" placeholder="Danh sách mô tả tóm tắt sản phẩm"
                     v-model="dataFormLevel3.listImg"/>

          <i class="text-10 font--semibold">Danh sách mô tả tóm tắt sản phẩm</i>
          <VueEditor class="text--10 mb--4" placeholder="Danh sách mô tả tóm tắt sản phẩm"
                     v-model="dataFormLevel3.content"/>

          <i class="text-10 font--semibold">Danh sách ưu đãi sản phẩm</i>
          <VueEditor class="text--10 mb--4" placeholder="Danh sách ưu đãi sản phẩm"
                     v-model="dataFormLevel3.promotion"/>

          <i class="text-10 font--semibold">Thông tin chi tiết sản phẩm</i>
          <VueEditor class="text--10 mb--4" placeholder="Thông tin chi tiết sản phẩm"
                     v-model="dataFormLevel3.infoDetails"/>
        </div>

      </div>
      <div class="d-flex justify-content-end align-items-center mt--4">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-add-level-3']?.hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormEditLevel3"
          :textContent="'Submit'"
        />
      </div>
    </b-modal>

    <!--    MODAL ADD TAG DESCRIPTION-->
    <b-modal ref="modal-add-tag-description" centered hide-footer :title="`Add form tag description`">
      <div class="w-100 d-flex justify-content-between align-items-center" v-for="(item, index) in _dataTagDescription"
           :key="index">

        <InputWebComponent option-input=""
                           :class="'mr--3'"
                           :placeholder="'Nhập tên tag description'"
                           :prepend-option="true"
                           @valueInputEmit="(val) => updateFormTagDescription(val, index, 'name')"
                           :value-prop="item.name"
                           :float-label="'Nhập tên tag description'"
                           icon-prepend="fa-light fa-signature"/>
        <InputWebComponent option-input=""
                           :value-prop="item.value"
                           :placeholder="'Nhập value tag description'"
                           :prepend-option="true"
                           @valueInputEmit="(val) => updateFormTagDescription(val, index, 'value')"
                           :float-label="'Nhập value tag description'"
                           icon-prepend="fa-solid fa-bolt"/>
        <button class="btn-icon" @click="addFormTagDescription">
          <i class="fa-solid fa-circle-plus"></i>
        </button>
        <button :disabled="index === 0" class="btn-icon" @click="subFormTagDescription(index)">
          <i class="fa-solid fa-circle-minus"></i>
        </button>
      </div>
      <div class="w-100 mt--4 d-flex justify-content-end align-items-center">
        <ButtonWebComponent
          :icon-prev="'fa-regular fa-circle-xmark'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-cancel'"
          @clickBtn="() => this.$refs?.['modal-add-tag-description']?.hide()"
          :textContent="'Cancel'"
          :class="'mr--5'"
        />
        <ButtonWebComponent
          :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
          :text-size="'text--11'"
          :br3="true"
          :option-style="'option-submit'"
          @clickBtn="submitFormTagDescription"
          :textContent="'Submit'"
        />
      </div>

    </b-modal>

  </div>
</template>

<script>
import {convertLinkUtils, handleTagDes} from "@/utils/Firebase/convert";
import {deleteDataFirebase, postDataFirebase, setDataFirebase} from "@/utils/Firebase/api";
import {randomNumber} from "@/utils/function/basic";
import {mapActions, mapGetters, mapState, mapMutations} from "vuex";

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
    },
    keyId: {
      type: String,
      required: true
    },
    productItem: {
      type: Object,
      required: true
    }

  },
  data() {
    return {
      dataFormLevel1: {
        name: '',
        link: '',
        key: ''
      },
      dataFormLevel2: {
        name: '',
        link: '',
        key: ''
      },
      dataFormLevel3: {name: '', link: '', discount: '', 'price-old': '', 'price-new': ''},
      showModalDelete: false,
      textContentModalDelete: null,
      typeModalDelete: '',
      keyLocal: '',
      keyProductLevel2: '',
      dataProductLevel2: Object,
      dataProductLevel3: Object,
      priceNew: '',
      optionSelect: [
        {name: 'Option list 1', value: 1},
        {name: 'Option list 2', value: 2},
        {name: 'Option list 3', value: 3},
        {name: 'Option list 4', value: 4},
        {name: 'Option list 5', value: 5},
        {name: 'Option list 6', value: 6},
      ],
      optionSelectFB: [],
      isToggle: true,
    }
  },
  async created() {

  },
  computed: {
    ...mapState('FirebaseApi/tagDescription', [
      'dataTagDescription',
      'dataTagDescriptionLocal'
    ]),
    ...mapState('FirebaseApi/product', [
      'dataProduct'
    ]),
    ...mapGetters('FirebaseApi/tagDescription', [
      '_dataTagDescription',
      '_dataTagDescriptionLocal'
    ]),
    ...mapGetters('FirebaseApi/product', [
      '_dataProduct',
    ])
  },
  methods: {
    ...mapActions('FirebaseApi/tagDescription', [
      'getDataTagDescription',
      'getDataTagDescriptionLocal',
    ]),
    ...mapMutations('FirebaseApi/tagDescription', [
      'updateFormTagDes',
      'editFormTagDescription'
    ]),
    ...mapMutations('FirebaseApi/product', [
      'sortNameDataProductLevel2',
      'sortDateDataProductLevel2',
      'sortNameDataProductLevel3',
      'sortDateDataProductLevel3'
    ]),
    randomNumber,
    openModalEditLevel1(key) {
      this.$refs?.['modal-edit-level-1']?.show()
      this.dataFormLevel1 = {name: this.productItem.name, link: this.productItem.name, key: this.productItem.key}
    },
    fnValueInputNameEditLv1(val) {
      this.dataFormLevel1.name = val
      this.dataFormLevel1.link = convertLinkUtils(val)
    },
    submitFormEditLevel1() {
      setDataFirebase('data-product', this.keyId, {...this.productItem, ...this.dataFormLevel1})
      this.$refs?.['modal-edit-level-1']?.hide()
    },
    getKeyProductLevel2(key) {
      this.keyProductLevel2 = key
    },
    openModalAddLevel2() {
      this.$refs?.['modal-add-level-2']?.show()
    },
    fnValueInputNameAddLv2(val) {
      this.dataFormLevel2.name = val
      this.dataFormLevel2.link = convertLinkUtils(val)
    },
    submitFormAddLevel2() {
      this.dataFormLevel2.createDate = new Date()
      postDataFirebase(`data-product/${this.keyId}/product-sub`, this.dataFormLevel2)
      this.$refs?.['modal-add-level-2']?.hide()
    },
    openModalEditLevel2(product) {
      this.$refs?.['modal-edit-level-2']?.show()
      this.dataProductLevel2 = product
      this.dataFormLevel2 = {name: this.dataProductLevel2?.name, link: this.dataProductLevel2?.link, key: product?.key}
    },
    fnValueInputNameEditLv2(val) {
      this.dataFormLevel2.name = val
      this.dataFormLevel2.link = convertLinkUtils(val)
    },
    submitFormEditLevel2() {
      setDataFirebase(`data-product/${this.keyId}/product-sub`, this.dataFormLevel2.key, {...this.dataProductLevel2, ...this.dataFormLevel2})
      this.$refs?.['modal-edit-level-2']?.hide()
    },
    async openModalAddLevel3(key) {
      this.dataFormLevel2.key = key
      await this.getDataTagDescription()
      this.$refs?.['modal-add-level-3']?.show()
      // this.dataFormLevel3.name = ''
      // this.dataFormLevel3.link = ''
      // this.dataFormLevel3['sub-title-default'] = ''
      this.dataFormLevel3 = {name: '', link: '', discount: '', 'price-old': '', 'price-new': ''}
    },
    async submitFormAddLevel3(){
      this.dataFormLevel3.createDate = new Date()
      await postDataFirebase(`data-product/${this.keyId}/product-sub/${ this.dataFormLevel2.key}/product-details`, this.dataFormLevel3);
      this.$refs?.['modal-add-level-3']?.hide()
    },
    async openModalEditLevel3(product) {
      await this.getDataTagDescription()
      this.$refs?.['modal-edit-level-3']?.show()
      this.dataFormLevel3 = {...product}
    },

    updateDataFormLevel3(val, attr) {
      this.dataFormLevel3[attr] = val
    },
    fnValueInputNameEditLv3(val) {
      this.dataFormLevel3.name = val
      this.dataFormLevel3.link = convertLinkUtils(val)
    },
    submitFormEditLevel3() {
      setDataFirebase(`data-product/${this.keyId}/product-sub/${this.keyProductLevel2}/product-details`, this.dataFormLevel3.key, {...this.dataFormLevel3})
      this.$refs?.['modal-edit-level-3']?.hide()
    },
    openModalDelete(type, product) {
      this.showModalDelete = true
      this.typeModalDelete = type
      this.keyLocal = product?.key
      if (product) {
        this.textContentModalDelete = `${product?.key} || ${product?.name}`
      } else {
        this.textContentModalDelete = `${this.keyId} || ${this.productItem?.name}`
      }
    },
    emitSubmitDelete() {
      switch (this.typeModalDelete) {
        case 'level1': {
          deleteDataFirebase('data-product', this.keyId)
          this.showModalDelete = false;
          break
        }
        case 'level2': {
          deleteDataFirebase(`data-product/${this.keyId}/product-sub`, this.keyLocal)
          this.showModalDelete = false;
          break
        }
        case 'level3': {
          deleteDataFirebase(`data-product/${this.keyId}/product-sub/${this.keyProductLevel2}/product-details`, this.keyLocal)
          this.showModalDelete = false;
          break
        }
      }
    },
    emitCancelDelete() {
      this.showModalDelete = false;
    },
    async openModalTagDes() {
      await this.getDataTagDescription()
      this.$refs?.['modal-add-tag-description']?.show()
    },
    addFormTagDescription() {
      let temp = {option: 'add', index: null}
      this.editFormTagDescription(temp)
    },
    subFormTagDescription(index) {
      let temp = {option: 'sub', index: index}
      this.editFormTagDescription(temp)
    },
    updateFormTagDescription(val, index, type) {
      let _payload = {index: index, type: type, val: val}
      this.updateFormTagDes(_payload)
    },
    async submitFormTagDescription() {
      await deleteDataFirebase('data-tag-description', null)
      await postDataFirebase('data-tag-description', this._dataTagDescription)
      this.$refs?.['modal-add-tag-description']?.hide()
    },
    fnEmmitValueMultiselect(val){
      this.dataFormLevel3.tagDescription = val
    },
    sortNameProductLevel3(key){
      this.sortNameDataProductLevel3({keyId: this.keyId, key: key, isToggle: this.isToggle })
      this.isToggle = !this.isToggle
    },
    sortDateProductLevel3(key){
      this.sortDateDataProductLevel3({keyId: this.keyId, key: key, isToggle: this.isToggle })
      this.isToggle = !this.isToggle
    },
    sortNameProductLevel2(key){
      this.sortNameDataProductLevel2({key: key, isToggle: this.isToggle})
      this.isToggle = !this.isToggle
    },
    sortDateProductLevel2(key){
      this.sortDateDataProductLevel2({key: key, isToggle: this.isToggle})
      this.isToggle = !this.isToggle
    }
  },
  watch: {
    dataFormLevel3: {
      handler: function (newValue) {
        if (newValue?.['price-old'] && newValue?.['discount']) {
          this.dataFormLevel3['price-new'] = (newValue?.['price-old']?.replaceAll('.', '') * (100 - newValue?.['discount']) / 100).toString()
        }
      },
      deep: true
    },
    'dataTagDescription': function () {

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
  width: 100%;

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
        padding: 0rem;
        border-top: 1px solid #f1f1f1;

        .card {

        }

        .count {
          font-size: 0.8rem;
          color: $color-text-red;
        }
      }
    }
  }
}

::v-deep .accordion-collapse-child {
  .card {
    .card-body {
      padding: 0.5rem !important;
      margin-left: 2rem;

      a {
        span, i {
          font-size: calc(12 / 16 * 1rem) !important;
          font-weight: 500;
          color: $color-text-admin;
          transition: 0.25s ease-in-out;
        }
      }

      a:hover {
        span, i {
          font-size: calc(12.5 / 16 * 1rem) !important;
          color: $color-primary;
          font-weight: 600;
          transition: 0.25s ease-in-out;
        }
      }

    }
  }
}

.wrapper-collapse .wrapper-collapse-child .card:hover {
  background-color: rgba(51, 65, 85, 0.28);
  transition: 0.25s ease-in-out;
}

::v-deep .modal-content {

}

::v-deep .modal-header {
  padding: 0.5rem;
}

::v-deep .modal-title {
  font-size: 14px;
  font-weight: 600;
  color: $color-text-admin;
  text-decoration: underline;
  text-transform: uppercase;
}

::v-deep .card-header:hover {
  background-color: rgba(51, 65, 85, 0.28);
  transition: 0.25s ease-in-out;
}

::v-deep .modal-content {
  max-height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
}

</style>
