module.export = {
  get: {
    ElClass: function(className, i) {
      return document.getElementsByClassName(className)[i];
    }
  }
};
