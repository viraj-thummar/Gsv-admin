import {
  Flex,
  Progress,
  SimpleGrid,
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
import { useParams } from "react-router-dom";
import Sidebar from "components/sidebar/Sidebar";
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
import Footer from "components/footer/FooterAdmin.js";
// Layout components
import Navbar from "components/navbar/NavbarAdmin.js";
import React, { useRef, useState } from "react";
import { SidebarContext } from "contexts/SidebarContext";
import routes from "routes.js";
import "./BlogPopup.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateBlog = (props) => {
  const { ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const params = useParams();
  console.log(params.productId);
  const { onOpen } = useDisclosure();
  const editor = useRef(null);
  const [richText, setRichText] = useState();
  const config = {
    placeholder: "start typing...",
  };
  UpdateBlog.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  UpdateBlog.formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <Box>
      <Box>
        <SidebarContext.Provider
          value={{
            toggleSidebar,
            setToggleSidebar,
          }}
        >
          <Sidebar routes={routes} display="none" {...rest} />
          <Box
            float="right"
            minHeight="100vh"
            height="100%"
            overflow="auto"
            position="relative"
            maxHeight="100%"
            w={{ base: "100%", xl: "calc( 100% - 290px )" }}
            maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
            transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
            transitionDuration=".2s, .2s, .35s"
            transitionProperty="top, bottom, width"
            transitionTimingFunction="linear, linear, ease"
          >
            <Portal>
              <Box>
                <Navbar
                  onOpen={onOpen}
                  logoText={"Horizon UI Dashboard PRO"}
                  brandText={"Update Blog"}
                  secondary={"Update Blog"}
                  message={"aaa"}
                  fixed={fixed}
                  {...rest}
                />
              </Box>
            </Portal>

            {getRoute() ? (
              <Box
                mx="auto"
                p={{ base: "20px", md: "30px" }}
                pe="20px"
                minH="100vh"
                pt="50px"
              >
                {/* <Box pt={{ base: "130px", md: "80px", xl: "80px" }}> */}
                <SimpleGrid
                  mb="20px"
                  columns={{ sm: 1, md: 1 }}
                  spacing={{ base: "20px", xl: "20px" }}
                >
                  <Card
                    direction="column"
                    w="100%"
                    px="0px"
                    overflowX={{ sm: "scroll", lg: "scroll" }}
                  >
                    <Flex
                      px="25px"
                      justify="space-between"
                      mb="20px"
                      align="center"
                    >
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
                    <Card mb="20px" {...rest}>
                      <Flex
                        align="center"
                        w="100%"
                        justify="space-between"
                        mb="30px"
                      >
                        <Text
                          color={textColorPrimary}
                          fontWeight="bold"
                          fontSize="2xl"
                          mb="4px"
                        >
                          Update Blog Post
                        </Text>
                      </Flex>
                      <form className="updateblogform">
                        <div className="updateblogform-div">
                          <label>PUBLISHED</label>
                          <input
                            className="updateblogform-input-checkbox"
                            type="checkbox"
                            fontSize="sm"
                          />
                        </div>
                        <div className="updateblogform-div">
                          <label>CREATED-DATE</label>
                          <input
                            className="updateblogform-input"
                            type="date"
                            fontSize="sm"
                          />
                        </div>
                        <div className="updateblogform-div">
                          <label>PUBLISHED-DATE</label>
                          <input
                            className="updateblogform-input"
                            type="date"
                            fontSize="sm"
                          />
                        </div>

                        <div className="updateblogform-div">
                          <label>UPDATED-DATE</label>
                          <input
                            className="updateblogform-input"
                            type="date"
                            fontSize="sm"
                          />
                        </div>
                        <div className="updateblogform-div">
                          <label>Add Content</label>
                          {/* <input
                            className="updateblogform-input"
                            type="text"
                            fontSize="sm"
                          /> */}
                          {/* <JoditEditor
                            ref={editor}
                            value={richText}
                            config={config}
                            onChange={(newRichText) => setRichText(newRichText)}
                          /> */}
                          <ReactQuill
                            value={richText}
                            onChange={(newRichText) => setRichText(newRichText)}
                            modules={UpdateBlog.modules}
                            formats={UpdateBlog.formats}
                          />
                        </div>
                        {richText}
                        <div className="updateblogform-div">
                          <label>SUMMARY</label>
                          <textarea
                            className="updateblogform-input"
                            type="text"
                            fontSize="sm"
                          ></textarea>
                        </div>
                        <div className="updateblogform-div">
                          <label>CONTENT</label>
                          <textarea
                            className="updateblogform-input"
                            type="text"
                            fontSize="sm"
                          ></textarea>
                        </div>
                        <div className="updateblogform-div">
                          <label>SUBHEADER</label>
                          <textarea
                            className="updateblogform-input"
                            type="text"
                            fontSize="sm"
                          ></textarea>
                        </div>

                        <div className="updateblogform-div">
                          <label>BONUSCONTENT</label>
                          <textarea
                            className="updateblogform-input"
                            type="text"
                            fontSize="sm"
                          ></textarea>
                        </div>
                        <div className="updateblogform-div">
                          <label>IMAGE</label>
                          <input
                            className="updateblogform-input"
                            type="file"
                            fontSize="sm"
                          />
                        </div>
                      </form>
                    </Card>
                  </Card>
                </SimpleGrid>
              </Box>
            ) : // </Box>
            null}
            <Box>
              <Footer />
            </Box>
          </Box>
        </SidebarContext.Provider>
      </Box>
    </Box>

    // <Card
    //   direction="column"
    //   w="100%"
    //   px="0px"
    //   overflowX={{ sm: "scroll", lg: "scroll" }}
    // >
    //   <Flex px="25px" justify="space-between" mb="20px" align="center">
    //     <Text
    //       fontSize="22px"
    //       fontWeight="700"
    //       lineHeight="100%"
    //     >
    //       Blog Post
    //     </Text>

    //     <Menu />
    //   </Flex>
    // </Card>

    // <section>
    //   alert("vv")
    //   <h1>update blog</h1>
    //   <p>{params.productId}</p>
    // </section>
  );
};

export default UpdateBlog;
