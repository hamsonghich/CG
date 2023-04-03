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
        <div style="width: 500px" v-if="choose === 'InputWebComponent'">
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
          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-InputWebComponent-1'].show()"
            :textContent="'Open code demo'"
          />
          <b-modal ref="Modal-InputWebComponent-1" hide-footer title="Demo code InputWebComponent">
            <div class="d-block">
             <pre>
               <code>
                   &lt;InputWebComponent
                      :option-input=&quot;&#39;password&#39;&quot;
                      :placeholder=&quot;&#39;Nhập mật khẩu&#39;&quot;
                      :errorText=&quot;&#39;Mật khẩu không đúng định dạng&#39;&quot;
                      :prepend-option=&quot;false&quot;
                      :append-option=&quot;true&quot;
                      @valueInput=&quot;fnValueInput&quot;
                      :float-label=&quot;&#39;Mật khẩu&#39;&quot;
                   /&gt;
               </code>
             </pre>
            </div>
          </b-modal>


          <InputWebComponent
            :option-input="''"
            :placeholder="'Nhập tên đăng nhập'"
            :prepend-option="true"
            @valueInput="fnValueInput"
            :float-label="'Tên đăng nhập'"
            icon-prepend="fa-solid fa-lock"
          />

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-InputWebComponent-2'].show()"
            :textContent="'Open code demo'"
          />
          <b-modal ref="Modal-InputWebComponent-2" hide-footer title="Demo code InputWebComponent">
            <div class="d-block">
             <pre>
               <code>
                 &lt;InputWebComponent
                    :option-input=&quot;&#39;&#39;&quot;
                    :placeholder=&quot;&#39;Nhập tên đăng nhập&#39;&quot;
                    :prepend-option=&quot;true&quot;
                    @valueInput=&quot;fnValueInput&quot;
                    :float-label=&quot;&#39;Tên đăng nhập&#39;&quot;
                    icon-prepend=&quot;fa-solid fa-lock&quot;
                 /&gt;
               </code>
             </pre>
            </div>
          </b-modal>


          <InputWebComponent
            :option-input="'search'"
            :placeholder="'Nhập từ khóa'"
            :prepend-option="false"
            :append-option="true"
            @valueInput="fnValueInput"
            :float-label="'Nhập từ khóa'"
            icon-prepend="fa-solid fa-lock"
          />

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-InputWebComponent-3'].show()"
            :textContent="'Open code demo'"
          />
          <b-modal ref="Modal-InputWebComponent-3" hide-footer title="Demo code InputWebComponent">
            <div class="d-block">
            <pre>
            <code>
                &lt;InputWebComponent
                  :option-input=&quot;&#39;search&#39;&quot;
                  :placeholder=&quot;&#39;Nhập từ khóa&#39;&quot;
                  :prepend-option=&quot;false&quot;
                  :append-option=&quot;true&quot;
                  @valueInput=&quot;fnValueInput&quot;
                  :float-label=&quot;&#39;Nhập từ khóa&#39;&quot;
                  icon-prepend=&quot;fa-solid fa-lock&quot;
                /&gt;
            </code>
          </pre>
            </div>
          </b-modal>


          <button class="btn btn-warning text--12 font--semibold my--2" @click="getValueInputTemplate">Get value input
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

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-PaginationWebComponent-1']?.show()"
            :textContent="'Open code demo 1'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-PaginationWebComponent-1" hide-footer title="Demo code PaginationWebComponent">
            <div class="d-block">
            <pre>
            <code>
              &lt;PaginationWebComponent
                :option=&quot;&#39;first&#39;&quot;
                :per-page=&quot;5&quot;
                :rows=&quot;100&quot;
                @currentEmmit=&quot;fnCurrentEmmit&quot;
              /&gt;
            </code>
          </pre>
            </div>
          </b-modal>


          <p class="my--3 font--medium text--14"> Goto last button number: page current: {{ currentPagePick }}</p>
          <PaginationWebComponent
            :option="'last'"
            :per-page="5"
            :rows="100"
            @currentEmmit="fnCurrentEmmit"
          />

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-PaginationWebComponent-2']?.show()"
            :textContent="'Open code demo 2'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-PaginationWebComponent-2" hide-footer title="Demo code PaginationWebComponent">
            <div class="d-block">
            <pre>
            <code>
              &lt;PaginationWebComponent
                :option=&quot;&#39;last&#39;&quot;
                :per-page=&quot;5&quot;
                :rows=&quot;100&quot;
                @currentEmmit=&quot;fnCurrentEmmit&quot;
              /&gt;
            </code>
          </pre>
            </div>
          </b-modal>


          <p class="my--3 font--medium text--14"> Goto first and last button number: page current:
            {{ currentPagePick }}</p>
          <PaginationWebComponent
            :option="'all'"
            :per-page="5"
            :rows="100"
            @currentEmmit="fnCurrentEmmit"
          />

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-PaginationWebComponent-3']?.show()"
            :textContent="'Open code demo 3'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-PaginationWebComponent-3" hide-footer title="Demo code PaginationWebComponent">
            <div class="d-block">
            <pre>
            <code>
              &lt;PaginationWebComponent
                :option=&quot;&#39;all&#39;&quot;
                :per-page=&quot;5&quot;
                :rows=&quot;100&quot;
                @currentEmmit=&quot;fnCurrentEmmit&quot;
              /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

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

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-AutocompleteWebComponent-1']?.show()"
            :textContent="'Open code demo 1'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-AutocompleteWebComponent-1" hide-footer title="Demo code AutocompleteWebComponent">
            <div class="d-block">
            <pre>
            <code>
             &lt;AutocompleteWebComponent
                :max-suggestions=&quot;10&quot;
                :value-attribute=&quot;&#39;id&#39;&quot;
                :display-attribute=&quot;&#39;title&#39;&quot;
                :placeholder=&quot;&#39;Hay chon gia tri ...&#39;&quot;
                :list-option=&quot;listOption&quot;
                @valueSelected=&quot;getValueSelected&quot;
                :option-btn=&quot;&#39;close&#39;&quot;
             /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

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

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-AutocompleteWebComponent-2']?.show()"
            :textContent="'Open code demo 2'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-AutocompleteWebComponent-2" hide-footer title="Demo code AutocompleteWebComponent">
            <div class="d-block">
            <pre>
            <code>
           &lt;AutocompleteWebComponent
            :max-suggestions=&quot;10&quot;
            :value-attribute=&quot;&#39;id&#39;&quot;
            :display-attribute=&quot;&#39;title&#39;&quot;
            :placeholder=&quot;&#39;Hay chon gia tri ...&#39;&quot;
            :list-option=&quot;listOption&quot;
            @valueSelected=&quot;getValueSelected&quot;
            :option-btn=&quot;&#39;search&#39;&quot;
          /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

          <p class="my--3 font--medium text--14"> AutocompleteWebComponent has nothing</p>
          <AutocompleteWebComponent
            :max-suggestions="10"
            :value-attribute="'id'"
            :display-attribute="'title'"
            :placeholder="'Hay chon gia tri ...'"
            :list-option="listOption"
            @valueSelected="getValueSelected"
          />

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-AutocompleteWebComponent-3']?.show()"
            :textContent="'Open code demo 3'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-AutocompleteWebComponent-3" hide-footer title="Demo code AutocompleteWebComponent">
            <div class="d-block">
            <pre>
            <code>
           &lt;AutocompleteWebComponent
            :max-suggestions=&quot;10&quot;
            :value-attribute=&quot;&#39;id&#39;&quot;
            :display-attribute=&quot;&#39;title&#39;&quot;
            :placeholder=&quot;&#39;Hay chon gia tri ...&#39;&quot;
            :list-option=&quot;listOption&quot;
            @valueSelected=&quot;getValueSelected&quot;
          /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

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

          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-AutocompleteWebComponent-4']?.show()"
            :textContent="'Open code demo 4'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-AutocompleteWebComponent-4" hide-footer title="Demo code AutocompleteWebComponent">
            <div class="d-block">
            <pre>
            <code>
          &lt;AutocompleteWebComponent
            :max-suggestions=&quot;10&quot;
            :value-attribute=&quot;&#39;id&#39;&quot;
            :display-attribute=&quot;&#39;title&#39;&quot;
            :placeholder=&quot;&#39;Hay chon gia tri ...&#39;&quot;
            :list-option=&quot;listOption&quot;
            @valueSelected=&quot;getValueSelected&quot;
            :is-disabled=&quot;true&quot;
          /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

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

            <ButtonWebComponent
              :icon-prev="'fa-thin fa-folder-open'"
              :text-size="'text--10'"
              :br3="true"
              :option-style="'option-main'"
              @clickBtn="() => this.$refs['Modal-ButtonWebComponent-1']?.show()"
              :textContent="'Open code demo 1'"
              :class="'my--5'"
            />
            <b-modal ref="Modal-ButtonWebComponent-1" hide-footer title="Demo code ButtonWebComponent">
              <div class="d-block">
            <pre>
            <code>
            &lt;ButtonWebComponent
              :icon-next=&quot;&#39;fa-sharp fa-solid fa-arrow-right&#39;&quot;
              :icon-prev=&quot;&#39;fa-sharp fa-solid fa-arrow-right&#39;&quot;
              :text-size=&quot;&#39;text--13&#39;&quot;
              :br3=&quot;true&quot;
              @clickBtn=&quot;emmitClickBtn&quot;
            /&gt;
            </code>
          </pre>
              </div>
            </b-modal>

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
            <ButtonWebComponent
              :icon-prev="'fa-thin fa-folder-open'"
              :text-size="'text--10'"
              :br3="true"
              :option-style="'option-main'"
              @clickBtn="() => this.$refs['Modal-ButtonWebComponent-7']?.show()"
              :textContent="'Open code demo 7'"
              :class="'my--5'"
            />
            <b-modal ref="Modal-ButtonWebComponent-7" hide-footer title="Demo code ButtonWebComponent">
              <div class="d-block">
            <pre>
            <code>
           &lt;ButtonWebComponent
              :icon-prev=&quot;&#39;fa-regular fa-circle-xmark&#39;&quot;
              :text-size=&quot;&#39;text--13&#39;&quot;
              :br3=&quot;true&quot;
              :option-style=&quot;&#39;option-cancel&#39;&quot;
              @clickBtn=&quot;emmitClickBtn&quot;
              :textContent=&quot;&#39;Cancel&#39;&quot;
            /&gt;
            </code>
          </pre>
              </div>
            </b-modal>
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
            <ButtonWebComponent
              :icon-prev="'fa-thin fa-folder-open'"
              :text-size="'text--10'"
              :br3="true"
              :option-style="'option-main'"
              @clickBtn="() => this.$refs['Modal-ButtonWebComponent-8']?.show()"
              :textContent="'Open code demo 8'"
              :class="'my--5'"
            />
            <b-modal ref="Modal-ButtonWebComponent-8" hide-footer title="Demo code ButtonWebComponent">
              <div class="d-block">
            <pre>
            <code>
           &lt;ButtonWebComponent
              :icon-next=&quot;&#39;fa-sharp fa-solid fa-paper-plane-top&#39;&quot;
              :text-size=&quot;&#39;text--13&#39;&quot;
              :br3=&quot;true&quot;
              :option-style=&quot;&#39;option-submit&#39;&quot;
              @clickBtn=&quot;emmitClickBtn&quot;
              :textContent=&quot;&#39;Submit&#39;&quot;
            /&gt;
            </code>
          </pre>
              </div>
            </b-modal>
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
            <ButtonWebComponent
              :icon-prev="'fa-thin fa-folder-open'"
              :text-size="'text--10'"
              :br3="true"
              :option-style="'option-main'"
              @clickBtn="() => this.$refs['Modal-ButtonWebComponent-9']?.show()"
              :textContent="'Open code demo 9'"
              :class="'my--5'"
            />
            <b-modal ref="Modal-ButtonWebComponent-9" hide-footer title="Demo code ButtonWebComponent">
              <div class="d-block">
            <pre>
            <code>
           &lt;ButtonWebComponent
              :text-size=&quot;&#39;text--13&#39;&quot;
              :br3=&quot;true&quot;
              :option-style=&quot;&#39;option-primary&#39;&quot;
              @clickBtn=&quot;emmitClickBtn&quot;
              :textContent=&quot;&#39;Normal&#39;&quot;
            /&gt;
            </code>
          </pre>
              </div>
            </b-modal>
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
          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-SelectWebComponent-1']?.show()"
            :textContent="'Open code demo 1'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-SelectWebComponent-1" hide-footer title="Demo code SelectWebComponent">
            <div class="d-block">
            <pre>
            <code>
            &lt;SelectWebComponent
              :multiple=&quot;false&quot;
              :text-field=&quot;&#39;name&#39;&quot;
              :value-field=&quot;&#39;value&#39;&quot;
              :options=&quot;optionList1&quot;
              @emitSelect=&quot;getValueSelectedOneItem&quot;
           /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

          <p class="my--3 font--medium text--14"> SelectWebComponent selected multiple item </p>
          <SelectWebComponent
            :multiple="true"
            :text-field="'name'"
            :value-field="'value'"
            :select-size="5"
            :options="optionList1"
            @emitSelect="getValueSelectedMultipleItem"
          />
          <ButtonWebComponent
            :icon-prev="'fa-thin fa-folder-open'"
            :text-size="'text--10'"
            :br3="true"
            :option-style="'option-main'"
            @clickBtn="() => this.$refs['Modal-SelectWebComponent-2']?.show()"
            :textContent="'Open code demo 2'"
            :class="'my--5'"
          />
          <b-modal ref="Modal-SelectWebComponent-2" hide-footer title="Demo code SelectWebComponent">
            <div class="d-block">
            <pre>
            <code>
              &lt;SelectWebComponent
                :multiple=&quot;true&quot;
                :text-field=&quot;&#39;name&#39;&quot;
                :value-field=&quot;&#39;value&#39;&quot;
                :select-size=&quot;5&quot;
                :options=&quot;optionList1&quot;
                @emitSelect=&quot;getValueSelectedMultipleItem&quot;
              /&gt;
            </code>
          </pre>
            </div>
          </b-modal>

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

        <!--        CardDetailWebComponent-->
        <div style="width: 250px" v-else-if="choose === 'CardDetailWebComponent'">
          <p class="my--3 font--medium text--14"> CardDetailWebComponent </p>
          <CardDetailWebComponent/>
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
        'CardDetailWebComponent',
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

::v-deep .modal-title {
  color: $color-white;
  font-size: 0.8rem;
}

::v-deep .modal-dialog {
  max-width: 1000px;
}

::v-deep .modal-content {
  background-color: $color-text-admin;
}

::v-deep .modal-body, pre, code {
  color: $color-white;
  font-size: 0.8rem;
}
</style>

<script setup>
</script>
