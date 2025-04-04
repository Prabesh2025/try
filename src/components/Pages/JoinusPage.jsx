import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export default function JoinusPage() {
  return (
    <div className='p-10'> 
       
       <Accordion allowMultiple className='w-8/12 mx-auto shadow-xl'>
      <AccordionItem className="border-1 rounded-t-md  py-2 px-2 bg-gray-100 text-lg font-medium" header="What is our motive?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem className="border-1 py-2 px-2 bg-gray-100 text-lg font-medium"  header="Where does we come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem className="border-1 py-2 px-2 bg-gray-100 text-lg font-medium"  header="How does we work?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>


      <AccordionItem className="border-1 py-2 px-2 bg-gray-100 text-lg font-medium "  header="What make us to do more on this field?">
        <p>Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
        </p>
      </AccordionItem>

      <AccordionItem className="border border-t border-b-2 rounded-b-md  py-2 px-2 bg-gray-100 text-lg font-medium"  header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit amet
        ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>

    </div>
  )
}
