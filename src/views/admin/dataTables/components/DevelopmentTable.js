// /* eslint-disable */
import {
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import React from "react";
import { Link, useHistory, Route } from "react-router-dom";
import BlogPostData from "./BlogPostData";
import UpdateBlog from "./UpdateBlog";

function DevelopmentTable() {
  let history = useHistory();

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const [data, setData] = React.useState(BlogPostData);
  const [headerData, setHeaderData] = React.useState([
    {
      id: "Id",
      Published: "Published",
      CreatedDate: "Created-Date",
      PublishedDate: "Published-Date",
      UpdatedDate: "UpdatedDate",
      Title: "Title",
      Summary: "Summary",
      Content: "Content",
      SubHeader: "SubHeader",
      BonusContent: "BonusContent",
      Image: "Image",
    },
  ]);

  const handleDelete = (index, e) => {
    setData(data.filter((item, i) => i !== index));
  };

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "scroll" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Blog Post
        </Text>
        <Menu />
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerData.map((item, index) => (
            <Tr key={index}>
              <Th>{item.Published}</Th>
              <Th>{item.CreatedDate}</Th>
              <Th>{item.PublishedDate}</Th>
              <Th>{item.UpdatedDate}</Th>
              <Th>{item.Title}</Th>
              <Th>{item.Summary}</Th>
              {/* <Th>{item.Content}</Th>
              <Th>{item.SubHeader}</Th>
              <Th>{item.BonusContent}</Th>
              <Th>{item.Image}</Th> */}
              <Th>Delete</Th>
              <Th>Edit</Th>
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {data.map((item, index) => (
            <Tr key={index} maxH="100px">
              <Td color={textColor} fontSize="md">
                <Text fontWeight="700">{item.Published}</Text>
              </Td>
              <Td color={textColor} fontSize="md">
                <Text fontWeight="700">{item.CreatedDate}</Text>
              </Td>
              <Td color={textColor} fontSize="md">
                <Text fontWeight="700">{item.PublishedDate}</Text>
              </Td>
              <Td color={textColor} fontSize="md">
                <Text fontWeight="700">{item.UpdatedDate}</Text>
              </Td>
              <Td color={textColor} fontSize="md">
                <Text
                  maxH="100px"
                  w="250px"
                  h="100px"
                  overflowY="scroll"
                  fontWeight="700"
                >
                  {item.Title}
                </Text>
              </Td>
              <Td color={textColor} fontSize="md">
                <Text
                  maxH="100px"
                  h="100px"
                  w="250px"
                  overflowY="scroll"
                  fontWeight="700"
                >
                  {item.Summary}
                </Text>
              </Td>
              {/* <Td color={textColor} fontSize="md">
                <Text
                  maxH="100px"
                  w="250px"
                  h="100px"
                  overflowY="scroll"
                  fontWeight="700"
                >
                  {item.Content}
                </Text>
              </Td>
              <Td color={textColor} fontSize="md">
                <Text
                  overflowY="scroll"
                  maxH="100px"
                  w="250px"
                  h="100px"
                  fontWeight="700"
                >
                  {item.SubHeader}
                </Text>
              </Td>
              <Td color={textColor}>
                <Text
                  fontSize="md"
                  overflowY="scroll"
                  maxH="100px"
                  h="100px"
                  w="250px"
                  fontWeight="700"
                >
                  {item.BonusContent}
                </Text>
              </Td>
              <Td borderColor="transparent" color={textColor}>
                <img src={item.image} alt w="200px" />
              </Td> */}
              <Td>
                <button onClick={(e) => handleDelete(index, e)}>
                  <i class="fa-solid fa-trash"  color={textColor}></i>
                </button>
              </Td>
              <Td>
                <button>
                  <Link class="fa-solid fa-pen-to-square" to="/updateblog/:blogid" color={textColor}></Link>
                  {/* <Route path='/updateblog/:blogid' exact>
                    <UpdateBlog />
                  </Route> */}
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}
export default DevelopmentTable;
