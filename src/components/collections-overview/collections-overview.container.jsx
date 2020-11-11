import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
