export function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-[40px] sm:text-[56px] mb-6">
            <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: 'transparent' }}>
              Politique de confidentialité
            </span>
          </h1>
          <p className="text-[#717182] text-lg">
            Dernière mise à jour : 20 octobre 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-[32px] mb-6">
              <span className="bg-clip-text bg-gradient-to-r from-[#9b3eff] to-[#ff6b35]" style={{ WebkitTextFillColor: 'transparent' }}>
                Introduction
              </span>
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Titah, agence de création de sites web spécialisée dans les hébergeurs touristiques, 
              accorde une grande importance à la protection de vos données personnelles. Cette politique 
              de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons 
              vos données lorsque vous utilisez notre site web.
            </p>
            <p className="text-[#44484F] leading-relaxed">
              En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </section>

          {/* Données collectées */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              1. Données que nous collectons
            </h2>
            
            <h3 className="text-[20px] mb-4 text-[#44484F]">
              1.1 Données que vous nous fournissez
            </h3>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li>Prénom et nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Type d'établissement touristique</li>
              <li>Service demandé</li>
              <li>Options sélectionnées</li>
              <li>Message de contact</li>
            </ul>

            <h3 className="text-[20px] mb-4 text-[#44484F]">
              1.2 Données collectées automatiquement
            </h3>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Lors de votre navigation sur notre site, nous pouvons collecter automatiquement :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li>Informations sur votre navigateur (User-Agent)</li>
              <li>Pages visitées et durée de visite</li>
              <li>Date et heure de connexion</li>
              <li>Préférences de consentement cookies</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-[12px] p-6 mb-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-blue-900 mb-2">Note importante sur les adresses IP</h4>
                  <p className="text-sm text-blue-800">
                    Nous <strong>ne collectons PAS</strong> votre adresse IP à des fins de tracking ou d'identification. 
                    Votre vie privée est respectée.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              2. Comment nous utilisons vos données
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Nous utilisons vos données personnelles uniquement pour :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li><strong>Répondre à vos demandes</strong> de contact et devis</li>
              <li><strong>Vous fournir des informations</strong> sur nos services</li>
              <li><strong>Améliorer notre site web</strong> et nos services</li>
              <li><strong>Respecter nos obligations légales</strong></li>
            </ul>
            <p className="text-[#44484F] leading-relaxed">
              Nous <strong>ne vendons jamais</strong> vos données personnelles à des tiers et ne les utilisons 
              pas à des fins publicitaires sans votre consentement explicite.
            </p>
          </section>

          {/* Base légale */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              3. Base légale du traitement
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Conformément au RGPD, nous traitons vos données sur les bases légales suivantes :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li><strong>Consentement :</strong> Lorsque vous nous contactez via notre formulaire</li>
              <li><strong>Intérêt légitime :</strong> Pour améliorer nos services et notre site web</li>
              <li><strong>Obligation légale :</strong> Pour respecter nos obligations fiscales et comptables</li>
            </ul>
          </section>

          {/* Partage des données */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              4. Partage de vos données
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Nous ne partageons vos données personnelles qu'avec :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li><strong>Supabase :</strong> Notre hébergeur de base de données (infrastructure sécurisée)</li>
              <li><strong>Prestataires techniques :</strong> Uniquement si nécessaire pour le fonctionnement du site</li>
            </ul>
            <p className="text-[#44484F] leading-relaxed">
              Tous nos prestataires sont soumis à des obligations strictes de confidentialité et de sécurité 
              conformes au RGPD.
            </p>
          </section>

          {/* Sécurité */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              5. Sécurité de vos données
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour 
              protéger vos données contre :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li>L'accès non autorisé</li>
              <li>La divulgation accidentelle</li>
              <li>La modification ou destruction</li>
              <li>La perte de données</li>
            </ul>
            <p className="text-[#44484F] leading-relaxed">
              Nos mesures incluent : chiffrement HTTPS, authentification sécurisée, sauvegardes régulières, 
              et accès restreint aux données.
            </p>
          </section>

          {/* Durée de conservation */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              6. Durée de conservation
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Nous conservons vos données personnelles :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-2">
              <li><strong>Demandes de contact :</strong> 3 ans maximum après votre dernier contact</li>
              <li><strong>Consentement cookies :</strong> 13 mois maximum</li>
              <li><strong>Obligations légales :</strong> Durée requise par la loi (données comptables, etc.)</li>
            </ul>
            <p className="text-[#44484F] leading-relaxed">
              Passé ce délai, vos données sont supprimées de manière sécurisée.
            </p>
          </section>

          {/* Vos droits */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              7. Vos droits
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-6 text-[#44484F] space-y-3">
              <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> Supprimer vos données (« droit à l'oubli »)</li>
              <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
            </ul>

            <div className="bg-gradient-to-r from-[#9b3eff]/10 to-[#ff6b35]/10 rounded-[12px] p-6 mb-6">
              <h4 className="text-[#1B1C1E] mb-3">Comment exercer vos droits ?</h4>
              <p className="text-[#44484F] mb-3">
                Pour exercer vos droits, contactez-nous par email à :
              </p>
              <a href="mailto:welcome@titah.fr" className="text-[#9b3eff] hover:underline">
                welcome@titah.fr
              </a>
              <p className="text-sm text-[#717182] mt-3">
                Nous nous engageons à répondre dans un délai de 30 jours maximum.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              8. Cookies et technologies similaires
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations, 
              consultez notre{' '}
              <a href="#cookies" className="text-[#9b3eff] hover:underline">
                Politique de cookies
              </a>.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              9. Modifications de cette politique
            </h2>
            <p className="text-[#44484F] leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une nouvelle date de « dernière mise à jour ». 
              Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              10. Nous contacter
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
            </p>
            <div className="bg-white border border-gray-200 rounded-[12px] p-6">
              <h4 className="text-[#1B1C1E] mb-3">Titah</h4>
              <p className="text-[#44484F] mb-2">
                <strong>Email :</strong>{' '}
                <a href="mailto:welcome@titah.fr" className="text-[#9b3eff] hover:underline">
                  welcome@titah.fr
                </a>
              </p>
              <p className="text-[#44484F]">
                <strong>Responsable du traitement :</strong> Titah SARL
              </p>
            </div>
          </section>

          {/* Réclamation */}
          <section className="mb-12">
            <h2 className="text-[28px] mb-6 text-[#1B1C1E]">
              11. Droit de réclamation
            </h2>
            <p className="text-[#44484F] leading-relaxed mb-4">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une 
              réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-[12px] p-6">
              <p className="text-[#44484F] mb-2">
                <strong>CNIL</strong><br />
                3 Place de Fontenoy<br />
                TSA 80715<br />
                75334 PARIS CEDEX 07
              </p>
              <p className="text-[#44484F]">
                <strong>Site web :</strong>{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#9b3eff] hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
