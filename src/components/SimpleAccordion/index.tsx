import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Container } from './styles'

export default function SimpleAccordion() {
  return (
    <Container>
      <h1> Dúvidas </h1>

      <div>
        <Accordion style={{ backgroundColor: 'black', marginTop: 40 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: 'white' }}>
              Porque investir em um automóvel ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: 'white', textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: 'black', marginTop: 30 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: 'white' }}>
              Buscando maior conforto em seu automóvel ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: 'white', textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: 'black', marginTop: 30 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ color: 'white' }}>Sedan ou Hatch?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ color: 'white', textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  )
}
