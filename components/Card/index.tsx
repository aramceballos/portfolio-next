import { colors } from '../../styles/theme';

type MediaCardProps = {
  title: string;
  description?: string;
  src?: string;
  repository?: string;
  url?: string;
};

const MediaCard = (props: MediaCardProps) => {
  const { title, description, src, repository, url } = props;

  const handleClick = (link: string) => {
    const win = window.open(link, '_blank')!;
    win.focus();
  };

  return (
    <>
      <div className='container'>
        <div className='image-container'>
          <img src={src} alt={`${title}-image`} className='image' />
        </div>
        <div className='links-container'>
          <p className='text'>{title}</p>
          {repository && (
            <span className='link' onClick={() => handleClick(repository)}>
              Go to repository
            </span>
          )}
          {url && (
            <span className='link' onClick={() => handleClick(url)}>
              View demo
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 345px;
          margin: 20px auto;
          background-color: ${colors.charade};
          position: relative;
          overflow: hidden;
        }

        .image-container {
          width: 100%;
          max-height: 250px;
          display: flex;
          justify-content: center;
          background-color: #2f2f2f;
        }

        .image {
          max-width: 100%;
          object-fit: contain;
        }

        .text {
          color: ${colors.white};
          font-family: 'Poppins';
          font-weight: 300;
          font-size: 20px;
          margin: 5px 0;
        }

        .links-container {
          padding: 5px;
        }

        .link {
          color: ${colors.white};
          font-family: 'Poppins';
          margin-right: 20px;
          font-weight: 200;
          border-bottom: 1px solid ${colors.white};
        }
      `}</style>
    </>
  );
};

export default MediaCard;
