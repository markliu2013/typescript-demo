(function () {
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    var user = { firstName: "Jane", lastName: "User" };
    document.body.textContent = greeter(user);
})();
//# sourceMappingURL=greeter4.js.map