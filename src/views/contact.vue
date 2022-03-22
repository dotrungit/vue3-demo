<template>
  <div class="bg-blue-200 bg-opacity-50 w-screen h-screen p-10">
    <form
      ref="form"
      @submit.prevent="submit"
      action="POST"
      class="container mx-auto w-2/3 form bg-white p-6 relative font-sans border bg-gray-200"
    >
      <h3 class="text-2xl text-gray-900 font-semibold">Register</h3>
      <p class="text-gray-600">Register demo form</p>

      <div class="flex flex-wrap justify-between mt-5">
        <div
          v-for="(field, i) in fields"
          :key="`form-item-${i}`"
          class="mb-6 md:mb-0 mt-5 relative"
          :class="getClassField(field.type)"
        >
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            {{ field.title }}
            <span v-if="field.required" class="text-red-500">&nbsp;*</span>
          </label>
          <template v-if="field.type === 'text'">
            <input
              v-model="values[field.name]"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-2 focus:outline-none"
              type="text"
              :name="field.name"
              :placeholder="field.placeholder"
              @input="checkValidate(field)"
            />
          </template>

          <template v-if="field.type === 'select'">
            <select
              v-model="values[field.name]"
              :name="field.name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-1 px-2 focus:outline-none focus:outline-none"
              @change="checkValidate(field)"
            >
              <option
                v-for="option in field.options"
                :value="option.value"
                :key="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute top-8 right-0 flex items-center px-2 text-gray-700"
            >
              <font-awesome-icon icon="caret-down" />
            </div>
          </template>

          <template v-if="field.type === 'checkbox'">
            <div
              v-for="(option, index) in field.options"
              :key="`checkbox-${index}`"
              class="mb-1"
            >
              <label class="block">
                <input
                  v-model="values[field.name]"
                  :value="option.value"
                  class="mr-2 leading-tight"
                  type="checkbox"
                  :name="field.name"
                  @change="checkValidate(field)"
                />
                <span class="text-sm"> {{ option.label }} </span>
              </label>
            </div>
          </template>

          <template v-if="field.type === 'radio'">
            <div
              v-for="(option, index) in field.options"
              :key="`checkbox-${index}`"
              class="mb-1"
            >
              <label class="block">
                <input
                  v-model="values[field.name]"
                  :value="option.value"
                  :name="field.name"
                  class="mr-2 leading-tight"
                  type="radio"
                  @change="checkValidate(field)"
                />
                <span class="text-sm"> {{ option.label }} </span>
              </label>
            </div>
          </template>

          <template v-if="field.type === 'textarea'">
            <textarea
              v-model="values[field.name]"
              :name="field.name"
              cols="10"
              rows="3"
              :placeholder="field.placeholder"
              class="border p-2 w-full focus:outline-none"
              @input="checkValidate(field)"
            ></textarea>
          </template>

          <div v-show="errors[field.name]" class="text-red-500 text-xs">
            {{ errors[field.name] }}
          </div>
        </div>
      </div>

      <input
        type="submit"
        value="Submit"
        class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
      />
    </form>

    <div class="container mx-auto">
      SubmitData:
      <pre>
    {{ submitData }}
  </pre
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  const initFields = [
    {
      type: 'text',
      title: 'YOUR NAME',
      placeholder: 'Your name',
      name: 'name',
      required: true,
    },
    {
      type: 'text',
      title: 'YOUR EMAIL',
      placeholder: 'Your email',
      name: 'email',
      required: true,
    },
    {
      type: 'text',
      title: 'TIME',
      name: 'time',
      placeholder: 'Time',
      required: true,
    },
    {
      type: 'select',
      title: 'SELECT',
      name: 'selectOption',
      required: true,
      options: [
        {
          label: 'title 1',
          value: 1,
        },
        {
          label: 'title 2',
          value: 2,
        },
      ],
    },
    {
      type: 'checkbox',
      title: 'CHECKBOX',
      name: 'checkboxOption',
      required: true,
      options: [
        {
          label: 'title 1',
          value: 1,
        },
        {
          label: 'title 2',
          value: 2,
        },
      ],
    },
    {
      type: 'radio',
      title: 'RADIO',
      name: 'radioOption',
      required: true,
      options: [
        {
          label: 'title 1',
          value: 1,
        },
        {
          label: 'title 2',
          value: 2,
        },
      ],
    },
    {
      type: 'textarea',
      title: 'TEXTAREA',
      name: 'textarea',
      required: true,
      placeholder: 'TEXTAREA',
    },
  ]

  export default defineComponent({
    name: 'Contact',
    setup() {
      return {}
    },
    data() {
      return {
        fields: JSON.parse(JSON.stringify(initFields)),
        values: {} as any,
        submitData: {},
        errors: {} as any,
      }
    },
    computed: {},
    mounted() {
      this.values = this.setInitValue()
    },
    methods: {
      getClassField(type: string) {
        if (type === 'textarea') return 'w-full'
        return 'md:w-5/12'
      },
      submit(event: any) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {} as any
        for (let [key, val] of formData.entries()) {
          Object.assign(data, { [key]: val })
        }

        for (let field of this.fields) {
          this.checkValidate(field)
        }

        if (Object.keys(this.errors).length === 0) {
          this.submitData = data
        }
      },
      checkValidate(field: any) {
        if (field.required) {
          if (
            typeof this.values[field.name] === 'undefined' ||
            this.values[field.name] === '' ||
            (field.type === 'checkbox' && this.values[field.name].length === 0)
          ) {
            this.errors[field.name] = `${field.name} is required`
          } else {
            delete this.errors[field.name]
          }
        }

        if (field.name === 'email' && this.values[field.name]) {
          if (!validateEmail(this.values[field.name])) {
            this.errors[field.name] = 'Invalid email address'
          } else {
            delete this.errors[field.name]
          }
        }
      },
      setInitValue() {
        const fields = JSON.parse(JSON.stringify(this.fields))
        let result = {} as any
        for (let field of fields) {
          if (field.type === 'checkbox') {
            result[field.name] = []
          }
        }

        return result
      },
    },
  })

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
</script>

<style></style>
