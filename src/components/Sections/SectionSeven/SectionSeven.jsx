import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function SectionSeven() {
  return (
    <ShowcaseSection
      title="Brought to you by DeFiPie in partnership with"
      imagesArray={[
        'companies/burberry.svg',
        'companies/google.svg',
        'companies/sony.svg',
        'companies/ikea.svg',
        'companies/nectar.svg',
      ]}
      padding="bottom"
    />
  )
}