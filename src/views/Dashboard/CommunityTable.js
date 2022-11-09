import React from "react";
import CommunityCard from "../../components/Card/CommunityCard";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Tables() {
  return (
    <>hello</>
    // <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
    //   <CommunityCard />
    //   {/* Projects Table */}
    //   <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
    //     <CardHeader p="6px 0px 22px 0px">
    //       <Flex direction="column">
    //         <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
    //           Your Community
    //         </Text>
    //         {/* <Flex align='center'>
    //           <Icon
    //             as={AiFillCheckCircle}
    //             color='green.500'
    //             w='15px'
    //             h='15px'
    //             me='5px'
    //           />
    //           <Text fontSize='sm' color='gray.400' fontWeight='normal'>
    //             <Text fontWeight='bold' as='span' color='gray.400'>
    //               +30%
    //             </Text>{" "}
    //             this month
    //           </Text>
    //         </Flex> */}
    //       </Flex>
    //     </CardHeader>
    //     <CardBody>
    //       <Table variant="simple" color="#fff">
    //         <Thead>
    //           <Tr my=".8rem" ps="0px">
    //             <Th
    //               ps="0px"
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Community UID
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Community Name
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Mode of Payment
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               No. of Members
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Date of Creation
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Poolcap
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Poolval
    //             </Th>
    //             <Th
    //               color="gray.400"
    //               fontFamily="Plus Jakarta Display"
    //               borderBottomColor="#56577A"
    //             >
    //               Community Status
    //             </Th>

    //             <Th borderBottomColor="#56577A"></Th>
    //           </Tr>
    //         </Thead>
    //         <Tbody>
    //           {/* {tablesProjectData.map((row, index, arr) => {
    //             return (
    //               <TablesProjectRow
    //                 name={row.name}
    //                 logo={row.logo}
    //                 status={row.status}
    //                 budget={row.budget}
    //                 progression={row.progression}
    //                 lastItem={index === arr.length - 1 ? true : false}
    //               />
    //             );
    //           })} */}
    //         </Tbody>
    //       </Table>
    //     </CardBody>
    //   </Card>
    // </Flex>
  );
}

export default Tables;
