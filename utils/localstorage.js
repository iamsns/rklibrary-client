const isLoggedIn =  window.localStorage.getItem("isLoggedIn") === "true" ? true : false

export {isLoggedIn}