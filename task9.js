obj = {
    num: 0,
    string: "string",
    func: function () {},
    emptyString: '',
    null: null,
    undefined: undefined
  };
  
  str = Object
          .entries(obj)
          .reduce((a, e) => {
            if (typeof e[1] != "function") {
              a += `"${e[0]}" : "${e[1]}", `;
            }
            return a;
          }, "`{")
          .slice(1, -2) + "}`";
  
  console.log(str)