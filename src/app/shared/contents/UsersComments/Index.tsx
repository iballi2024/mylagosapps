"use client";
import { Box, Flex, Image, Space, Text } from "@mantine/core";
import { UserComment, usersComments } from "./users-comments";
import { FaCaretRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobal } from "@/src/app/context/globalStore";

export default function UsersComments() {
  const { theme } = useGlobal();
  // Initial array of items
  const [items, setItems] = useState([...usersComments]);
  const [currentComment, setCurrentComment] = useState({
    userName: "",
    userImage: "",
    comment: "",
    date: "",
  });

  useEffect(() => {
    setCurrentComment(items[0]);
  }, [items]);

  // // Function to slide items to the right
  // const slideRight = () => {
  //   // Copy the array to avoid mutating state directly
  //   const newItems = [...items];
  //   // Remove the last item and insert it at the beginning
  //   const lastItem = newItems.shift();
  //   newItems.unshift(lastItem as any);
  //   // Update state with new array order
  //   setItems(newItems);
  // };

  // Function to move the first item to the last position
  const moveFirstToLast = () => {
    if (items.length <= 1) return; // if array has 0 or 1 item, no changes needed

    const newItems = [...items]; // Copy the array to avoid mutating state directly
    const firstItem = newItems.shift(); // Remove the first item
    newItems.push(firstItem as UserComment); // Add it to the end of the array
    setItems(newItems); // Update state with new array
  };

  return (
    <>
      <Text
        fw={600}
        fz={{ base: 35, md: 45 }}
        ta="left"
        mb={{ base: 20, md: 30 }}
        ff={"heading"}
        style={() => ({
          maxWidth: "450px",
          lineHeight: 1.2,
        })}
      >
        People are Saying About LagosApps
      </Text>
      <Text className="max-w-[550px]">
        Everything you need to accept to payment and grow your money of manage
        anywhere on planet
      </Text>
      <Box mt={40} component="blockquote">
        <Text
          className={`before:content-['"'] before:block before:text-8xl before:-mb-12 before:italic before:-ml-4`}
          h={100}
          lineClamp={4}
        >
          {currentComment.comment}
        </Text>
        <Text component="cite" mt={20} display={"block"}>
          {/* Albert Einstein — Theoretical Physicist */}-{" "}
          {currentComment.userName}
        </Text>
      </Box>

      <Flex mt={50} gap={12}>
        <Box component="ul" display={"flex"} className="gap-3">
          {/* .slice(1, 5) */}
          <div className="items-container flex gap-3 overflow-hidden rounded-full">
            <AnimatePresence>
              {items.slice(0, 4).map((comment: UserComment) => (
                <motion.div
                  key={comment.userName}
                  layout
                  className="item-box"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  // transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  transition={{ type: "spring", damping: 25 }}
                >
                  <Box component="li">
                    <button
                      type="button"
                      aria-label="view user comment"
                      onClick={() => setCurrentComment(comment)}
                      className="cursor-pointer flex items-center gap-2 text-sm h-14 w-14 rounded-full overflow-hidden | border-5"
                      style={{
                        // borderColor: comment.comment === currentComment.comment ? "#0FA958" : "transparent",
                        borderColor:
                          comment.comment === currentComment.comment
                            ? "var(--color-primary-6)"
                            : "var(--color-primary-0)",
                      }}
                    >
                      <Image
                        src={comment.userImage}
                        width={200}
                        height={200}
                        alt={`${comment.userName} profile image`}
                      />
                    </button>
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Box>
        {/* <Space h={20} /> */}
        <Flex component="div" justify={"end"}>
          <button
            type="button"
            aria-label="view user comment"
            onClick={moveFirstToLast}
            className="cursor-pointer flex items-center justify-center gap-2 text-sm h-14 w-14 rounded-full overflow-hidden border-2 border-white"
          >
            <FaCaretRight size={22} />
          </button>
        </Flex>
      </Flex>
    </>
  );
}
