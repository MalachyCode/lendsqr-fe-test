import { SidebarContentType, SidebarHeaderAndContentType } from '../types';

export const RenderSidebarContents = (props: SidebarContentType) => (
  <div className='sidebar-option-box'>
    <div className='stripe'></div>
    <div className='contents'>
      <div className='icon'>
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className={props.imgClassName}
        />
      </div>
      <div className='name'>
        <p>{props.name}</p>
      </div>
    </div>
  </div>
);

const RenderSidebarContentsAndHeader = (props: SidebarHeaderAndContentType) => (
  <div>
    <div className='sidebar-option-header'>
      <p>{props.headerName}</p>
    </div>
    {props.contentsData.map((content) => (
      <RenderSidebarContents
        name={content.name}
        imgSrc={content.imgSrc}
        imgAlt={content.imgAlt}
        imgClassName={content.imgClassName}
      />
    ))}
  </div>
);

export default RenderSidebarContentsAndHeader;
