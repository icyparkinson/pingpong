const { Timestamp } = require("bson");
const { schema } = require("./Entry");

const userSchema = new schema({
  username:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
},{
  timestamps: true,
}
  )

const User = mongoose.model("User", userSchema)

module.exports = User 