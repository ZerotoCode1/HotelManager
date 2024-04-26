import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion as AccordionMui } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ReactNode } from "react";

interface AccordionProps {
  title: string;
  details: ReactNode;
}
interface Props {
  options: AccordionProps[];
}

const Accordion = (props: Props) => {
  const { options } = props;
  return (
    <div>
      {options.map((item) => {
        return (
          <AccordionMui>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              {item.title}
            </AccordionSummary>
            <AccordionDetails>{item.details}</AccordionDetails>
          </AccordionMui>
        );
      })}
    </div>
  );
};

export default Accordion;

export const accodionData: AccordionProps[] = [
  {
    title: "Accordion 1",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Accordion 2",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Accordion 3",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];
