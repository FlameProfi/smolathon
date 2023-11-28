module.exports = class UserDto {
    email;
    userName;
    _id;
    isActivated;
    status;

    constructor(model) {
        this.email = model.email;
        this.userName = model.userName;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.status = model.status;
    }
}
