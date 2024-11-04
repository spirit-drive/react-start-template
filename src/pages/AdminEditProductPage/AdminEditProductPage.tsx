import React from "react"
import { Layout } from "../../shared/Layout"
import { ViewProductList } from "../../entities/ViewProductList"

export const AdminEditProductPage = () => {

    return (
        <Layout>         
            <ViewProductList isEditMode={true} />
        </Layout>
    )
}