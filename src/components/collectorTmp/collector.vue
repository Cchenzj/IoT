<template>
  <div class="collector-ct">
    <a-row class="header-row" type="flex" justify="center" align="middle">
      <a-col :span="24">
        <!-- <a-col :span="5">
          <a-input placeholder="Basic usage"/>
        </a-col>
        <a-col :span="5">
          <a-select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            style="width: 200px"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
          >
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="tom">Tom</a-select-option>
          </a-select>
        </a-col> -->
      <a-form
      layout="inline"
      :form="form"
      @submit="handleSubmit"
    >
    <a-form-item
      label="名称"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 19 }"
      style="width:300px"
    >
      <a-input
        v-decorator="[
          'note',
          {rules: [{ required: false, message: 'Please input your note!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="适用类型"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 19 }"
      style="width:300px"
    >
      <a-select
        showSearch
        v-decorator="['gender',]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <div v-for="i in 24" style="display: inline-block;padding: 5px;" :key="i">
          <a-card hoverable style="width: 300px" title="checks">
            <template slot="extra">
              <a-checkbox value="A"></a-checkbox>
            </template>
            <template class="ant-card-actions" slot="actions">
              <a-icon type="setting"/>
              <a-icon type="edit"/>
              <a-icon type="ellipsis"/>
            </template>
            <a-card-meta title="Card title" description="This is the description">
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Collector',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form:', values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>

<style scoped>
.ant-layout-header {
  background-color: #f0f2f5;
}
.ant-layout {
  height: 100%;
}
.header-row {
  height: 10%;
  background-color: #fff;
}
.collector-ct {
  height: calc(100% - 74px);
}
</style>
