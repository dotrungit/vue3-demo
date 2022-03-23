<template>
  <div class="flex">
    <div
      class="p-4 w-1/3 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Configs Form
        </h5>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li
            v-for="(field, index) in fields"
            :key="`field-${index}`"
            class="py-3 sm:py-4"
          >
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                {{ index + 1 }}
              </div>
              <div class="flex-1 min-w-0">
                <p
                  class="text-sm uppercase font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ field.name }}
                </p>
                <div class="flex flex-wrap">
                  <div
                    v-for="(item, key, i) in field"
                    :key="`item-${i}`"
                    class="w-2/4 text-sm text-gray-500 truncate dark:text-gray-400"
                  >
                    {{ key }} : {{ item }}
                  </div>
                </div>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <button
                  type="button"
                  class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  @click="openCreate(index)"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  @click="deleteField(index)"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-2/4 pt-10">
      <contact :fields="fields"></contact>
    </div>
  </div>
  <modal :show="creating" :show-button-modal="false" @close="creating = false">
    <div class="p-6">
      <div class="mb-6">
        <label
          for="type"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Type</label
        >

        <select
          v-model="newItem.type"
          id="type"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="text">Text</option>
          <option value="select">Select</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
          <option value="textarea">Textarea</option>
        </select>
      </div>
      <div class="mb-6">
        <div class="flex items-center ml-3 mr-6">
          <input
            v-model="newItem.required"
            class="mr-2 leading-tight w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            type="checkbox"
          />
          <span class="font-medium text-gray-900 dark:text-gray-300">
            Required
          </span>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Title</label
        >
        <input
          v-model="newItem.title"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
        />
      </div>
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Name</label
        >
        <input
          v-model="newItem.name"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
        />
      </div>

      <div class="mb-6">
        <label
          for="placeholder"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Placeholder</label
        >
        <input
          v-model="newItem.placeholder"
          type="text"
          id="placeholder"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="placeholder"
        />
      </div>
      <div
        v-if="['checkbox', 'radio', 'select'].includes(newItem.type)"
        class="mb-6"
      >
        <label
          for="option"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Option
        </label>
        <div
          v-for="(option, index) in newItem.options"
          :key="`new-option-${index}`"
          class="flex"
        >
          <div class="flex items-center mb-3">
            <label
              class="mr-3 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >Label:
            </label>
            <input
              v-model="option.label"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Label"
            />
          </div>
          <div class="flex items-center mb-3">
            <label
              class="mr-3 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >Value:
            </label>
            <input
              v-model="option.value"
              type="text"
              id="option"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Value"
            />
          </div>

          <button
            type="button"
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            @click="deleteOption(index)"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex justify-center items-center">
          <button
            type="button"
            class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            @click="addOption"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <button
        @click="createField"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </div>
  </modal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Contact from '../components/contact.vue'
  import Modal from '../components/modal.vue'

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

  const newItemBlank = {
    type: '',
    placeholder: '',
    title: '',
    required: false,
    name: '',
    options: [] as any,
  }

  export default defineComponent({
    components: {
      Contact,
      Modal,
    },
    setup() {
      return {}
    },
    data() {
      return {
        fields: JSON.parse(JSON.stringify(initFields)),
        creating: false,
        newItem: JSON.parse(JSON.stringify(newItemBlank)),
        indexToInsert: -1,
      }
    },
    methods: {
      deleteField(index: number) {
        this.fields.splice(index, 1)
      },
      openCreate(index: number) {
        this.indexToInsert = index
        this.creating = true
      },
      createField() {
        const newItem = JSON.parse(JSON.stringify(this.newItem))
        if (['textarea', 'text'].includes(newItem.type)) {
          delete newItem.options
        }
        this.creating = false
        this.fields.splice(this.indexToInsert, 0, newItem)
        this.newItem = newItemBlank
      },
      addOption() {
        this.newItem.options.push({
          label: '',
          value: '',
        })
      },
      deleteOption(index: number) {
        this.newItem.options.splice(index, 1)
      },
    },
  })
</script>

<style scoped></style>
