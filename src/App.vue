<template>
  <div id="app">
    <vue-form-generator :schema="test.schema" :model="test.model"></vue-form-generator>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: {
        model: {
          test: {
            test: [],
          },
        },
        schema: {
          fields: [
            {
              type: 'checklist',
              model: 'test.test',
              label: 'Test',
              values: [
                'apple', //
                'orange',
                'kiwi',
              ],
              fieldOptions: {
                listBox: true,
              },
              onChanged(model) {
                console.log('skills changed to', model.test);
              },
              onValidated(model, errors) {
                console.log('skills validated:', errors);
              },
            },
          ],
        },
      },
    }
  },
}
</script>
