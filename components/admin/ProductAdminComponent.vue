<template>
  <div class="container-fluid">
    <div class="row mr--4">
      <AccordionAdminWebComponent v-for="(item, index) in listAccordionParent"
                                  :id="index"
                                  :title-header="item.name"
                                  :list="item.listAccordionChild"
                                  :title-link="'/home'"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listAccordionParent: [
        {
          name: 'Title parent 1',
          link: 'link',
          listAccordionChild: [{name: 'Title item 1', link: 'link', list: ['1', '2', '3']},
            {name: 'Title item 2', link: 'link', list: ['1', '2', '3']},
            {name: 'Title item 3', link: 'link', list: ['1', '2', '3']},]
        },
        {
          name: 'Title parent 2',
          link: 'link',
          listAccordionChild: [{name: 'Title item 1', link: 'link', list: ['1', '2', '3']},
            {name: 'Title item 2', link: 'link', list: ['1', '2', '3']},
            {name: 'Title item 3', link: 'link', list: ['1', '2', '3']},]
        },
        {
          name: 'Title parent 3',
          link: 'link',
          listAccordionChild: [{name: 'Title item 1', link: 'link', list: ['1', '2', '3']},
            {name: 'Title item 2', link: 'link', list: ['1', '2', '3']},
            {name: 'Title item 3', link: 'link', list: ['1', '2', '3']},]
        },
      ],

    }
  }

}

</script>

<style scoped lang="scss">
* {
  color: white !important;
}
</style>
