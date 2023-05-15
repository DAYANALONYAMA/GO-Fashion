import { gql } from "@apollo/client";

export const FILTER_PRODUCT_BY_TYPE_QUERY = gql`
query filterProductsByType($filters:ProductFiltersInput){
    products(filters:$filters){
      data{
        id
        attributes{
          title
          img
          img2
          isNew
          price
          categories{
            data{
              id
              attributes{
                title
                desc
              }
            }
          }
          sub_categories{
            data{
              id
              attributes{
                title
              }
            }
          }
        }
        
      }
    }
  }
`