import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize, setSortProperty } from "../data/ActionCreators";

const mapStateToProps = dataStore => dataStore;
const mapDispatchToProps = { setPageSize, setSortProperty };

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore, ...router, ...actionCreators,
  currentPage: Number(router.match.params.page),
  pageCount: Math.ceil((dataStore.products_total
    | dataStore.pageSize || 5)/(dataStore.pageSize || 5)),
  navigateToPage: (page) => router.history
    .push(`/shop/products/${router.match.params.category}/${page}`),
})

// HOC withRouter - 가장 근접한 Route로부터 가져온 상세 정보를 컴포넌트에 제공
export const ProductPageConnector = (PageComponent) =>
  withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent));