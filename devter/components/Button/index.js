import { colors } from "styles/theme";

const Button = ({ children, onClick, ...props }) => (
  <>
    <button type="button" onClick={onClick} {...props}>
      {children}
    </button>

    <style jsx>
      {`
        button {
          display: flex;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: ${colors.white};
          border-radius: 9999px;
          font-weight: 800;
          padding: 8px 24px;
          cursor: pointer;
          transition opacity .3s ease;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: .7;
        }
      `}
    </style>
  </>
);

export default Button;
