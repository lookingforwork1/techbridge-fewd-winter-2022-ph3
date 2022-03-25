class User {
  constructor(name, permissions, password){
    this.name = name;
    this.permissions = permissions;
    this.password = password;
  }
}

class Employees {
  constructor(){
    this.users = []
  }

  login(user, password) {
    let enduser = ''
    
    this.users.forEach(user => { 
      if (user.name == $_GET['user'] && user.password == $_GET['password']) {
        // login = true;
        enduser = user.name;
      }
    })
    return enduser;
  }

  add_user(user) {
    // console.log(this.users)
    this.users.push(user);
  }

  is_authorized(username, permission){
    let indexofperm = -1
    
    for (let i = 0 ; i < this.users.length; i+=1){
      if (this.users[i].name == username){
        
        indexofperm = (this.users[i].permissions.indexOf(permission))
        
        if (indexofperm > -1) {
          return true
        }
          
      }
    }
    return false
  }
}

function load_users() {
  // make a call to data base
  // create new users
  // add to employees object
  // return employees object
}

// employees = load_users()


user1 = new User('john', ['read','edit'], 'password1')
user2 = new User('mark', ['read'], 'password2')
user3 = new User('mary', ['read','delete', 'edit'], 'password3')

employees = new Employees()

employees.add_user(user1)
employees.add_user(user2)
employees.add_user(user3)

// get query arguments
var $_GET = {}, 
  args = location.search.substr(1).split(/&/);

for (var i=0; i<args.length; ++i) {
    var tmp = args[i].split(/=/);
    if (tmp[0] != "") {
        $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
    }
}

// https://knowingrespectfulcarrier.russeby.repl.co/test.html?user=russ&password=asdfasdf

console.log($_GET['user'])
console.log($_GET['password'])

user = employees.login($_GET['user'], $_GET['password'])

if (user==''){
  document.location.href = '/index.html'
}


