import { parseSubCategoryResult } from "./parseSubCategoryResult"

export const parseProductResult = (productResult) => {
    const product = { id: productResult.id, ...productResult.attributes }

    if (product.sub_categories && product.sub_categories.data) {
        product.sub_categories = product.sub_categories.data.map((subCategory) => parseSubCategoryResult(subCategory))
    }


    return product
}
