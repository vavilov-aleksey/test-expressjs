let mockDataList = [
  { id: 1, title: "Article 1" },
  { id: 2, title: "Article 2" },
  { id: 3, title: "Article 3" },
  { id: 4, title: "Article 4" },
];

export const getAllData = (req, res) => {
  res.status(200).json(mockDataList);
};

export const createArticle = (req, res) => {
  const newData = {
    id: Date.now().toString(),
    ...req.body,
  };
  mockDataList.push(newData);
  res.status(201).json(newData);
};

export const deleteArticle = (req, res) => {
  const { articleId } = req.params;
  mockDataList = mockDataList.filter((item) => item.id.toString() !== articleId.toString());
  res.json({ message: `Remove article id: ${articleId}` });
};
