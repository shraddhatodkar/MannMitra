// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   roles: {  type: String, enum:["user", "admin"], default: "user" },
//   firstLogin: { type: Boolean, default: true },
//   assessmentCompleted: { type: Boolean, default: false },
// }, { timestamps: true });


// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Role management
    role: {
      type: String,
      enum: ["student", "admin", "mentor"],
      default: "student",
    },

    // Track first login & assessment
    firstLogin: { type: Boolean, default: true },
    assessmentCompleted: { type: Boolean, default: false },

    // ✅ Assigned mentor (optional)
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor", default: null },

    // ✅ Trusted contacts for safety
    trustedContacts: [
      {
        name: { type: String, required: true },
        relationship: { type: String, required: true },
        phone: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
