export const parseSubCategoryResult = (result) => {
    const subCategory = { id: result.id, ...result.attributes }


    return subCategory
}
