'use client';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFBirthChart from './PDFBirthChart';

const PDFDownloadButton = ({ horoscope, chartData }) => (
  <PDFDownloadLink
    document={<PDFBirthChart horoscope={horoscope} chartData={chartData} />}
    fileName="birthchart.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? (
        'Loading document...'
      ) : (
        <button className='btn btn-primary'>
          Download PDF
        </button>
      )
    }
  </PDFDownloadLink>
);

export default PDFDownloadButton;
