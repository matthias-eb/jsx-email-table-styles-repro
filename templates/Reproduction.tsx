import { Body, Head, Html, Markdown, Preview } from 'jsx-email';

export const templateName = 'Reproduction';

export const previewProps = {
  email: 'batman@example.com',
  name: 'Bruce Wayne',
};

export interface TemplateProps {
  email: string;
  name: string;
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

export const Template = ({ email, name }: TemplateProps) => (
  <Html>
    <Head />
    <Preview>
      This is our email preview text for {name} &lt;{email}&gt;
    </Preview>
    <Body style={main}>
      <Markdown
        markdownCustomStyles={{
          table: {
            borderCollapse: 'collapse',
          },
          th: {
            border: '1px solid black', // not applied
          },
          td: {
            border: '4px solid blue', // Applied for td and th
          },
        }}
      >
        {`
Col1 | Col2 | Col3
---- | ---- | ----
Td1  |  td2 |  td3
`}
      </Markdown>
    </Body>
  </Html>
);
