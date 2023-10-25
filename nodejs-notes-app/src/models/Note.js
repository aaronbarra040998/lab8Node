import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date, // Agrega el campo de fecha de publicación de tipo Date
      default: Date.now, // Puedes establecer un valor predeterminado si lo deseas
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
