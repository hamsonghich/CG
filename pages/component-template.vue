<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <button class="btn btn-primary my--1 w-100 text--12" @click="fnBtn(item)" v-for="item in listBtn">
          {{ item }}
        </button>
      </div>
      <div class="col-9">
        <!--        InputWebComponent-->
        <div style="width: 300px" v-if="choose === 'InputWebComponent'">
          <p class="my--2 font--medium text--14">InputWebComponent</p>
          <InputWebComponent
            :option-input="'password'"
            :placeholder="'Nhập mật khẩu'"
            :errorText="'Mật khẩu không đúng định dạng'"
            :prepend-option="false"
            :append-option="true"
            @valueInput="fnValueInput"
            :float-label="'Mật khẩu'"
          />

          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập tên đăng nhập'"
            :prepend-option="true"
            @valueInput="fnValueInput"
            :float-label="'Tên đăng nhập'"
            icon-prepend="fa-solid fa-lock"
          />

          <InputWebComponent
            :option-input="'search'"
            :placeholder="'Nhập từ khóa'"
            :prepend-option="false"
            :append-option="true"
            @valueInput="fnValueInput"
            :float-label="'Nhập từ khóa'"
            icon-prepend="fa-solid fa-lock"
          />

          <button class="btn btn-warning text--12 font--semibold" @click="getValueInputTemplate">Get value input
            template
          </button>

        </div>

        <!--        PaginationWebComponent-->
        <div style="width:500px" v-else-if="choose === 'PaginationWebComponent'">
          <p class="mt--2 mb--5 font--medium text--14">PaginationWebComponent</p>

          <p class="my--3 font--medium text--14"> Goto first button number : page current: {{ currentPagePick }}</p>
          <PaginationWebComponent
            :option="'first'"
            :per-page="5"
            :rows="100"
            @currentEmmit="fnCurrentEmmit"
          />
          <p class="my--3 font--medium text--14"> Goto last button number: page current: {{ currentPagePick }}</p>
          <PaginationWebComponent
            :option="'last'"
            :per-page="5"
            :rows="100"
            @currentEmmit="fnCurrentEmmit"
          />
          <p class="my--3 font--medium text--14"> Goto first and last button number: page current:
            {{ currentPagePick }}</p>
          <PaginationWebComponent
            :option="'all'"
            :per-page="5"
            :rows="100"
            @currentEmmit="fnCurrentEmmit"
          />

        </div>

        <!--        AutocompleteWebComponent-->
        <div style="width: 500px;" v-else-if="choose === 'AutocompleteWebComponent'">
          <p class="my--3 font--medium text--14"> AutocompleteWebComponent has close</p>
          <AutocompleteWebComponent
            :max-suggestions="10"
            :value-attribute="'id'"
            :display-attribute="'title'"
            :placeholder="'Hay chon gia tri ...'"
            :list-option="listOption"
            @valueSelected="getValueSelected"
            :option-btn="'close'"
          />

          <p class="my--3 font--medium text--14"> AutocompleteWebComponent has search</p>
          <AutocompleteWebComponent
            :max-suggestions="10"
            :value-attribute="'id'"
            :display-attribute="'title'"
            :placeholder="'Hay chon gia tri ...'"
            :list-option="listOption"
            @valueSelected="getValueSelected"
            :option-btn="'search'"
          />

          <p class="my--3 font--medium text--14"> AutocompleteWebComponent has nothing</p>
          <AutocompleteWebComponent
            :max-suggestions="10"
            :value-attribute="'id'"
            :display-attribute="'title'"
            :placeholder="'Hay chon gia tri ...'"
            :list-option="listOption"
            @valueSelected="getValueSelected"
          />

          <p class="my--3 font--medium text--14"> AutocompleteWebComponent has nothing and disabled</p>
          <AutocompleteWebComponent
            :max-suggestions="10"
            :value-attribute="'id'"
            :display-attribute="'title'"
            :placeholder="'Hay chon gia tri ...'"
            :list-option="listOption"
            @valueSelected="getValueSelected"
            :is-disabled="true"
          />


        </div>

        <!--        AccordionWebComponent-->
        <div style="width: 300px;" v-else-if="choose === 'AccordionWebComponent'">
          <p class="my--3 font--medium text--14"> AccordionWebComponent </p>
          <div v-for="(item, index) in [1,2,3]">
            <AccordionWebComponent
              :id="index"
              :title-header="`Title Header ${index}`"
              :content="contentAccordion"
              :list="listAccordion"
              :title-link="'/home'"
            />
          </div>

        </div>

        <!--        ButtonWebComponent-->
        <div style="width: 100%;" class="d-flex flex-wrap" v-else-if="choose === 'ButtonWebComponent'">
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-default'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              @clickBtn="emmitClickBtn"
            />
          </div>
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-danger'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-danger'"
              @clickBtn="emmitClickBtn"
            />
          </div>
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-primary'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-primary'"
              @clickBtn="emmitClickBtn"
            />
          </div>
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-success'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-success'"
              @clickBtn="emmitClickBtn"
            />
          </div>
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-warning'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-warning'"
              @clickBtn="emmitClickBtn"
            />
          </div>
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-main'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-main'"
              @clickBtn="emmitClickBtn"
            />
          </div>

          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-cancel'</p>
            <ButtonWebComponent
              :icon-prev="'fa-regular fa-circle-xmark'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-cancel'"
              @clickBtn="emmitClickBtn"
              :textContent="'Cancel'"
            />
          </div>

          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-submit'</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-paper-plane-top'"
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-submit'"
              @clickBtn="emmitClickBtn"
              :textContent="'Submit'"
            />
          </div>
          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option no icon</p>
            <ButtonWebComponent
              :text-size="'text--13'"
              :br3="true"
              :option-style="'option-primary'"
              @clickBtn="emmitClickBtn"
              :textContent="'Normal'"
            />
          </div>

          <div class="m--2 p--2 bsd">
            <p class="my--3 font--medium text--14"> ButtonWebComponent option style 'option-default' and disabled</p>
            <ButtonWebComponent
              :icon-next="'fa-sharp fa-solid fa-arrow-right'"
              :icon-prev="'fa-sharp fa-solid fa-arrow-right'"
              :text-size="'text--13'"
              :br3="true"
              @clickBtn="emmitClickBtn"
              :is-disabled="true"
              :text-content="'Disabled Button'"
            />
          </div>

        </div>

        <!--        SelectWebComponent-->
        <div style="width: 500px;" class="" v-else-if="choose === 'SelectWebComponent'">
          <p class="my--3 font--medium text--14"> SelectWebComponent selected one item </p>
          <SelectWebComponent
            :multiple="false"
            :text-field="'name'"
            :value-field="'value'"
            :options="optionList1"
            @emitSelect="getValueSelectedOneItem"
          />
          <p class="my--3 font--medium text--14"> SelectWebComponent selected multiple item </p>
          <SelectWebComponent
            :multiple="true"
            :text-field="'name'"
            :value-field="'value'"
            :select-size="5"
            :options="optionList1"
            @emitSelect="getValueSelectedMultipleItem"
          />
        </div>

        <!--        StartWebComponent-->
        <div style="width: 200px;" class="" v-else-if="choose === 'StarWebComponent'">
          <p class="my--3 font--medium text--14"> StarWebComponent has disable choose star </p>
          <StarWebComponent
            :is-disabled="true"
            :color="'#dc3545'"
            :value="2.6"
            @valueStar="getValueStar"
          />
          <p class="my--3 font--medium text--14"> StarWebComponent has choose star </p>
          <StarWebComponent
            :color="'#e67e22'"
            :value="4"
            @valueStar="getValueStar"
          />
        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listBtn: [
        'InputWebComponent',
        'PaginationWebComponent',
        'AutocompleteWebComponent',
        'AccordionWebComponent',
        'ButtonWebComponent',
        'SelectWebComponent',
        'StarWebComponent',
      ],
      valueInputTemplate: '',
      choose: '',
      currentPagePick: 1,
      listOption: [
        {id: 1, title: 'A'},
        {id: 2, title: 'B'},
        {id: 3, title: 'C'},
      ],
      contentAccordion: 'Content accordion',
      listAccordion: [
        {name: 'Title item 1', link: 'link'},
        {name: 'Title item 2', link: 'link'},
        {name: 'Title item 3', link: 'link'},
      ],

      optionList1: [
        {name: 'Option list 1', value: 1},
        {name: 'Option list 2', value: 2},
        {name: 'Option list 3', value: 3},
        {name: 'Option list 4', value: 4},
        {name: 'Option list 5', value: 5},
        {name: 'Option list 6', value: 6},
      ]
    }
  },
  methods: {
    fnValueInput(value) {
      this.valueInputTemplate = value
    },
    getValueInputTemplate() {
      console.log(this.valueInputTemplate)
    },
    fnBtn(value) {
      this.choose = value
    },
    fnCurrentEmmit(event) {
      console.log('event', event)
      this.currentPagePick = event
    },
    getValueSelected(event) {
      console.log('value selected autocomplete = ', event)
    },
    emmitClickBtn(emmit) {
      console.log('emmit', emmit)
    },
    getValueSelectedOneItem(emmit) {
      console.log('emmit', emmit)
    },
    getValueSelectedMultipleItem(emmit) {
      console.log('emmit', emmit)
    },
    getValueStar(emmit) {
      console.log('emmit', emmit)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {

}
</style>

<script setup>
</script>
