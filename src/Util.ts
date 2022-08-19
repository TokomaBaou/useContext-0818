/** 絞り込みオプション処理 */
  const handleFilter = (filterOption: any) => {
    // 一致していたらフィルタリセット
    if (state.filterOption === filterOption) {
      setState({
        ...state,
        filterOption: null,
        filterList: state.resultList,
        dataTableOption: {
          ...state.dataTableOption,
          page: 1
        }
      })
      return;
    }

    setState({
      ...state,
      filterOption: filterOption,
      filterList: statusFilter(state.resultList, filterOption),
      dataTableOption: {
        ...state.dataTableOption,
        page: 1
      }
    })
  }