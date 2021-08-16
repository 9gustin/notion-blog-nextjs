import { indexGenerator, rnrSlugify } from '@9gustin/react-notion-render'

const TableOfContents = ({blocks}) => {
  return (
    <>
      Table of contents:
      <ul>
        {
          indexGenerator(blocks).map(({ id, plainText, type }) => (
            <li key={id}>
              <a href={`#${rnrSlugify(plainText)}`}>
                {plainText} - {type}
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default TableOfContents

