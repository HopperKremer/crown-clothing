import "./collection.styles.scss";

const CollectionPage = (props) => (
  <h1>Collection Page{props.match.params.collectionId}</h1>
);

export default CollectionPage;
