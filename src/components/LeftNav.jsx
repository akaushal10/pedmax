import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const LeftNav = () => {
  return (
    <>
      <div className="bg-darkblue p-2">
      <div className="text-center">
      <img src="https://www.pedmax.com/images/logo.svg"/>
      </div>
        <div>
          <p className="my-2 text-orange bolder-text">Favorites</p>
          <div
            style={{ fontSize: "12px" }}
            className="bg-lightpurple rounded-corners p-2 text-center text-white"
          >
            Available after Register or Login
          </div>
        </div>
        <div>
          <p className="my-2 text-orange bolder-text">Sports</p>
          <div className="rounded-corners text-center text-white">
            <Accordion
              style={{ background: "none" }}
              className=" rounded-corners"
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="text-white small py-0" />
                }
                className="text-white small my-0 bg-lightpurple rounded-corners"
              >
                <ExpandMoreIcon /> Accordion 1
              </AccordionSummary>
              <AccordionDetails className="bg-lightpurple rounded-corners mt-1">
                <Accordion
                  style={{ boxShadow: "none", background: "none" }}
                  className=" rounded-corners"
                >
                  <AccordionSummary
                    expandIcon={
                      <AddCircleOutlineIcon className="text-white small py-0" />
                    }
                    className="text-white small my-0 rounded-corners"
                  >
                    <AddCircleOutlineIcon /> Accordion 1
                  </AccordionSummary>
                  <AccordionDetails className="bg-lightpurple rounded-corners mt-1">
                    fgmkbdfm
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftNav;
