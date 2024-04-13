import HAS from 'hive-auth-wrapper'

// Your application information
const APP_META = {name:"myapp", description:"My HAS compatible application", icon:undefined}

// Create an authentication object
const auth = {
  username: "sakshamkurkure",  // required - replace "username" with your Hive account name (without the @)
  expire: undefined,
  key: "STM6k34Q5eUrBK7hjGV37D6aJsvG9nTFZEz9yHUQRDb5VZiqfwHQ4"
}

// Retrieving connection status
const status = HAS.status()
console.log(status)