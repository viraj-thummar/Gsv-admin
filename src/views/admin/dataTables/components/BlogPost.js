import React, { Fragment } from "react";
import {Button,Table} from "react-bootstrap"
import BlogPostData from "./BlogPostData"

function BlogPost() {
  return (
    <Fragment>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        BlogPostData && BlogPostData.length > 0 
                        ? 
                        BlogPostData.map((item) => {
                            return(
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                </tr>
                            )
                        }) : "no data"
                    }
                </tbody>
            </Table>
        </div>
    </Fragment>
  )
}

export default BlogPost