const tool = {
  getFieldFromSchema (schema, name) {
    var arr = schema.filter(field => {
      return field.name === name
    })
    var field = arr.length ? arr[0] : null
    return field
  }
}
export default tool
