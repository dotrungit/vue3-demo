<template>
  <div class="bg-opacity-50">
    <form
      ref="form"
      @submit.prevent="submit"
      action="POST"
      class="container mx-auto md:w-2/3 form bg-white p-6 relative font-sans border bg-gray-200"
    >
      <h3 class="text-2xl text-gray-900 font-semibold">Register</h3>
      <p class="text-gray-600">Register demo form</p>

      <div class="flex flex-wrap justify-between mt-5">
        <div
          v-for="(field, i) in initFields"
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
              class="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none"
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
            ></div>
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
                  class="mr-2 leading-tight w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  type="checkbox"
                  :name="field.name"
                  @change="checkValidate(field)"
                />
                <span class="font-medium text-gray-900 dark:text-gray-300">
                  {{ option.label }}
                </span>
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
                  class="mr-2 leading-tight w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  type="radio"
                  @change="checkValidate(field)"
                />
                <span class="font-medium text-gray-900 dark:text-gray-300">
                  {{ option.label }}
                </span>
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
              class="border p-2 w-full focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
        class="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

  export default defineComponent({
    name: 'Contact',
    props: {
      fields: {
        type: Array,
        default: () => [],
      },
    },
    setup() {
      return {}
    },
    data() {
      return {
        initFields: this.fields as any,
        values: {} as any,
        submitData: {},
        errors: {} as any,
      }
    },
    watch: {
      fields: {
        handler(val) {
          this.initFields = val
          this.values = this.setInitValue()
        },
        deep: true,
      },
    },
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

        for (let field of this.initFields) {
          this.checkValidate(field)
        }

        if (Object.keys(this.errors).length === 0) {
          this.submitData = JSON.parse(JSON.stringify(this.values))
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
        const fields = JSON.parse(JSON.stringify(this.initFields))
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
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
</script>

<style></style>
