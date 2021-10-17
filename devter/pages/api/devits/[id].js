import { firestore } from "_firebase/admin";

export default async (req, res) => {
  const { id } = req.query;

  let doc;
  try {
    doc = await firestore.collection("devits").doc(id).get();
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }

  const data = doc.data();
  if (doc.id || doc) {
    data.id = doc.id;
    const { createdAt } = data;

    return res.status(200).json({
      ...data,
      createdAt: +createdAt.toDate(),
    });
  } else {
    return res.status(404).json({ error: "Devit not found" });
  }
};
