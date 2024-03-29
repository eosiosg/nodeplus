import React, { Component } from "react";
import { Layout,BackTop } from "antd";
import AppHeader from "../../components/Header";
import AppFooter from "../../components/Footer";
import "./index.less";
const { Content } = Layout;

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    setTimeout(() => window.scrollTo(0,0), 250)
  }
  render() {
    return (
      <div className="home_wrapper">
        <BackTop/>
        <Layout className="wapper">
          <AppHeader transparency={true} current="">
            header
          </AppHeader>
          <Content>
            <div className="policy_warp termsOfUse_warp">
              <div className="title">Terms of Use</div>
              <div className="title_h3">1. Agreement to Terms</div>
              <div className="text">
                1.1. These Terms of Use constitute a legally binding agreement
                made between you, whether personally or on behalf of an entity
                (“you” or “User”) and Nodeplus, ("Nodeplus," “we,” “us,” or
                “our”), concerning your access to and use of the
                https://nodeplus.io/ website (the “Site”) as well as any other
                media form, media channel, mobile website digital service,
                Validator services, or mobile application related, linked, or
                otherwise connected thereto or provided by us (collectively, the
                “Services”).
                <span className="text-bold">
                  BY USING THE WEBSITE AND/OR THE SERVICES, YOU AGREE TO THESE
                  TERMS OF USE; IF YOU DO NOT AGREE, DO NOT USE THE SITE AND/OR
                  THE SERVICES. NODEPLUS RESERVES THE RIGHT, AT ITS SOLE
                  DISCRETION, TO AMEND, CHANGE, MODIFY, ADD OR REMOVE PORTIONS
                  OF THESE TERMS OF USE, AT ANY TIME. IT IS YOUR RESPONSIBILITY
                  TO CHECK THESE TERMS PERIODICALLY FOR CHANGES. YOUR CONTINUED
                  USE OF THE WEBSITE AND/OR THE SERVICES FOLLOWING THE PUBLISHED
                  UPDATES TO THE TERMS WILL MEAN THAT YOU ACCEPT AND AGREE TO
                  THE CHANGES. AS LONG AS YOU AGREE AND COMPLY WITH THESE TERMS,
                  NODEPLUS GRANTS YOU A PERSONAL, NON-EXCLUSIVE,
                  NON-TRANSFERABLE, LIMITED PRIVILEGE TO ENTER AND USE THE
                  WEBSITE AND THE SERVICES.
                </span>
                <div className="text">
                  1.2. The information provided on the Site and our Services is
                  not intended for distribution to or use by any person or
                  entity in any jurisdiction or country where such distribution
                  or use would be contrary to law or regulation or which would
                  subject us to any registration requirement within such
                  jurisdiction or country. Accordingly, those persons who choose
                  to access the Site or Services from other locations do so on
                  their own initiative and are solely responsible for compliance
                  with local laws, if and to the extent local laws are
                  applicable.
                </div>
                <div className="text">
                  1.3. Our Services are intended for users who are at least 18
                  years old. People under the age of 18 are not permitted to use
                  our Services or our Site.
                </div>
                <div className="title_h3">2. Definitions</div>
                <div className="text">
                  2.1. “Blockchain” means a distributed digital ledger that is
                  not under the control of a single identifiable or discreet
                  individual or entity and where accounts (including units of
                  account contained in them) cannot be manipulated without
                  providing a user’s specific private key. This may be a “main
                  net” used as a determinative record of historical events and
                  transactions on the ledger, or a “test net” which operates
                  like a main net but does not have a Cryptocurrency that
                  carries substantial real-world value and is generally used for
                  simulated or testing purposes.
                </div>
                <div className="text">
                  2.2. “Cryptocurrency”, “Cryptocurrencies” is a reference to
                  the distributed, decentralized peer-to-peer digital currencies
                  that are tracked by a Blockchain. For the purposes of this
                  Terms of Use, “Cryptocurrency” includes, but is not limited
                  to, the following distributed digital ledgers (both related
                  main nets and test nets): Tezos, Cosmos, Kava, Kusama, Terra,
                  Irisnet, CyberWay, DAOBet, Chainlink, Algorand, Nucypher,
                  Solana, Polkadot, Robonomics, Ton, Celo, Regen, Oasis, Coda,
                  Dfinity
                </div>{" "}
                <div className="text">
                  2.3. “User Data” means all data, files and information that
                  User provides to Nodeplus in the course of using the Services.
                  Although we perform regular routine backups of data, you are
                  solely responsible for all data that you transmit or that
                  relates to any activity you have undertaken using the Site.
                  You agree that we shall have no liability to you for any loss
                  or corruption of any such data, and you hereby waive any right
                  of action against us arising from any such loss or corruption
                  of such data. Note that any information posted to a public
                  blockchain is accessible to the public, and you should not
                  expect confidentiality nor a guarantee against reproduction
                  for such (whether or not in connection to our Services).
                  Please refer to our Privacy Policy fo
                </div>{" "}
                <div className="text">
                  2.4. “User Funds” means the Cryptocurrencies controlled by
                  User or
                </div>{" "}
                <div className="text">
                  2.5. “Validator Rewards” means all Cryptocurrency generated by
                  operating Validator Nodes, including, but not limited to,
                  block rewards, endorser rewards, transaction fees and any
                  other direct payments as a result of operating a Validator
                  Node.
                </div>
                <div className="title_h3">3. Our Responsibilities</div>
                <div className="text">
                  3.1. Validation – Nodeplus operates Staking Validator Nodes to
                  support the decentralized functioning of various Blockchains.
                  Nodeplus maintains all of the hardware, software,
                  connectivity, technological, management & supervision, and any
                  other requirements to properly deploy these Validator Nodes.
                  You may use your Cryptocurrencies (as allowed by the related
                  Blockchains) to support our status as a Delegated Staking
                  Validator for those Blockchains. We will distribute Validator
                  Rewards generated by our Staking Validators among those who
                  designated Cryptocurrencies to support our status as a
                  Validator proportionate to the amount of Cryptocurrencies they
                  use to designate such support as is consistent with our
                  advertisements or website and the customs of each supported
                  Blockchain.
                </div>
                <div className="text">
                  3.2. Support – We aim to provide quality and timely support
                  for each of our Services. You can email us with any questions
                  or technical issues and we will assist you as soon as we can.
                </div>
                <div className="title_h3">4. Your Responsibilities</div>
                <div className="text">
                  4.1. In the use of any of our Services, you agree to take the
                  following actions, or to otherwise agree to carry any
                  liability, responsibility, and accountability as described
                  below
                </div>
                <div className="text">
                  4.2. Delegation Decisions – You have sole discretion as to
                  whether to and how much Cryptocurrencies will be designated
                  towards support of our status as a Delegated Validator. As is
                  the nature of Blockchain systems, you are in full control of
                  designating Cryptocurrencies, and must tend to the operations
                  and current events required for responsible designation.
                </div>
                <div className="text">
                  4.3. Taxes and Other Legal Obligations – You are responsible
                  for paying any taxes related to your Cryptocurrencies, whether
                  it involves appreciation in value, capital gains, general
                  income (including those from Staking Rewards), or any other
                  types of taxable income. You also agree not to use our
                  Services in any illegal manner or to support any illegal
                  activity, and to comply with any other applicable laws or
                  regulations on your use of Blockchain and Cryptocurrencies.
                </div>
                <div className="text">
                  4.4. Malicious Behavior – You will not take any steps to harm
                  our systems or our ability to provide our Services to you or
                  others, other than those permitted by these Terms, our
                  systems, or our written or verbal instructions. Any attempt at
                  unauthorized use of our private keys, inhibiting the
                  functionality of our technical equipment and hardware (e.g.
                  malware or DDoS), or other method to direct our systems to
                  function in a way that is not permitted (as determined in our
                  sole discretion) is considered a violation of these terms.
                </div>
                <div className="text">
                  4.5. Typical Risk of Blockchains and Cryptocurrencies – Your
                  use of any Blockchain is subject to the risk and limitations
                  of that Blockchain, including, but not limited to, fifty-one
                  attacks, mis-addressed transactions, Sybil attacks, eclipse
                  attacks, compromised private keys, or vulnerabilities made at
                  the “core” level. Further, your use of any payment method,
                  including where permitted, any Cryptocurrency, is at your own
                  risk and is subject to the terms and conditions and policies
                  of such payment (service). You agree to hold Nodeplus
                  unaccountable for these types of risks, and to waive your
                  right to litigate, arbitrate, mediate, or otherwise hold any
                  type of claim against Nodeplus for injuries suffered due to
                  your use of a Blockchain network or service.
                </div>
                <div className="text">
                  4.6. You represent and warrant that:
                </div>
                <div className="list">
                you have the legal
                  capacity and you agree to comply with these Terms of Use;
                </div>
                <div className="list">
                entering into this Agreement will not be a breach or violation
                  of any other contract or agreement to which User is bound;
                </div>
                <div className="list">
                you will not use our Services for any illegal or unauthorized
                  purpose, and your use of the our Services will not violate any
                  applicable law or regulation;
                </div>
                <div className="list">
                you are at least 18 years of
                  age.
                </div>

                <div className="title_h3">5. Intellectual Property</div>
                <div className="text">
                  5.1. Unless otherwise indicated, the Site and our Services are
                  our proprietary property, and all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics on the Site and the trademarks,
                  service marks, and logos contained therein are owned or
                  controlled by us or licensed to us, and are protected by
                  copyright and trademark laws.
                </div>
                <div className="text">
                  5.2. Any code or other property that is provided “open-source”
                  is subject to the rights and restrictions in the accompanying
                  license for such code or property. The Content and the Marks
                  are provided on the Site or via our Services “AS IS” for your
                  information and personal use only. Except as expressly
                  provided in these Terms of Use, no part of the Site and no
                  Content or Marks may be copied, reproduced, aggregated,
                  republished, uploaded, posted, publicly displayed, encoded,
                  translated, transmitted, distributed, sold, licensed, or
                  otherwise exploited for any commercial purpose whatsoever,
                  without our express prior written permission.
                </div>
                <div className="text">
                  5.3. Provided that you are eligible to use the Site and
                  Services, you are granted a limited license to access and use
                  the Site and to download or print a copy of any portion of the
                  Content to which you have properly gained access solely for
                  your personal, non-commercial use. We reserve all rights not
                  expressly granted to you in and to the Site, the Services, the
                  Content and the Marks.
                </div>
                <div className="text">
                  5.4. You acknowledge and agree that any questions, comments,
                  suggestions, ideas, feedback, or other information regarding
                  the Services ("Submissions") provided by you to us are
                  non-confidential and shall become our sole property. We shall
                  own exclusive rights, including all intellectual property
                  rights, and shall be entitled to the unrestricted use and
                  dissemination of these Submissions for any lawful purpose,
                  commercial or otherwise, without acknowledgment or
                  compensation to you. You hereby waive all moral rights to any
                  such Submissions, and you hereby warrant that any such
                  Submissions are original with you or that you have the right
                  to submit such Submissions. You agree there shall be no
                  recourse against us for any alleged or actual infringement or
                  misappropriation of any proprietary right in your Submissions.
                </div>
                <div className="title_h3">
                  6. Third Party Websites and Conten
                </div>
                <div className="text">
                  6.1. Our Service may contain links to third-party web sites or
                  services that are not owned or controlled by Nodeplus.
                </div>
                <div className="text">
                  6.2. Nodeplus has no control over, and assumes no
                  responsibility for, the content, privacy policies, or
                  practices of any third party web sites or services. You
                  further acknowledge and agree that Nodeplus shall not be
                  responsible or liable, directly or indirectly, for any damage
                  or loss caused or alleged to be caused by or in connection
                  with use of or reliance on any such content, goods or services
                  available on or through any such web sites or services.
                </div>
                <div className="text">
                  6.3. We strongly advise you to read the terms and conditions
                  and privacy policies of any third-party web sites or services
                  that you visit.
                </div>
                <div className="title_h3">7. Site and Services Management</div>
                <div className="text">
                  7.1.1. We reserve the right, but not the obligation, to:
                </div>
                <div className="list">
                  monitor the Site and Services for violations of these Terms of
                  Use;
                </div>
                <div className="list">
                  take appropriate legal action against anyone who, in our sole
                  discretion, violates the law or these Terms of Use, including
                  without limitation, reporting such user to law enforcement
                  authorities;
                </div>
                <div className="list">
                  in our sole discretion and without limitation, refuse,
                  restrict access to, limit the availability of, or disable (to
                  the extent technologically feasible) any of your Contributions
                  or any portion thereof;
                </div>
                <div className="list">
                  in our sole discretion and without limitation, notice, or
                  liability, to remove from the Site or otherwise disable all
                  files and content that are excessive in size or are in any way
                  burdensome to our systems; and
                </div>
                <div className="list">
                  otherwise manage the Site and Services in a manner designed to
                  protect our rights and property and to facilitate their proper
                  functioning.
                </div>
                <div className="title_h3">
                  8. Modifications and Interruptions
                </div>
                <div className="text">
                  8.1. We reserve the right to change, modify, or remove the
                  contents of the Site at any time or for any reason at our sole
                  discretion without notice. However, we have no obligation to
                  update any information on our Site. We also reserve the right
                  to modify or discontinue all or part of our Services without
                  notice at any time. We will not be liable to you or any third
                  party for any modification, price change, suspension, or
                  discontinuance of the Site or our Services.
                </div>
                <div className="text">
                  8.2. We cannot guarantee the Site or Services will be
                  available at all times. We may experience hardware, software,
                  or other problems or need to perform maintenance related to
                  the Site or Services, resulting in interruptions, delays, or
                  errors. We reserve the right to change, revise, update,
                  suspend, discontinue, or otherwise modify the Site or Services
                  at any time or for any reason without notice to you. You agree
                  that we have no liability whatsoever for any loss, damage, or
                  inconvenience caused by your inability to access or use the
                  Site or Services during any downtime or discontinuance.
                </div>
                <div className="text">
                  8.3. Nothing in these Terms of Use will be construed to
                  obligate us to maintain and support the Site or Services or to
                  supply any corrections, updates, or releases in connection
                  therewith.
                </div>
                <div className="title_h3">9. Disclaimer</div>
                <div className="text">
                  9.1. The Site and Services are provided "as is", without
                  warranty of any kind, express or implied, including but not
                  limited to the warranties of merchantability, fitness for a
                  particular purpose and noninfringement.
                </div>
                <div className="text">
                  9.2. In no event shall the authors of the Site and Services,
                  employees and affiliates of Nodeplus be liable for any claim,
                  damages or other liability, whether in an action of contract,
                  tort or otherwise, arising from, out of or in connection with
                  the Site and Services or the use or other dealings in the Site
                  and Services.
                </div>
                <div className="text">
                  9.3. In no event will Nodeplus or its affiliates, or any of
                  its or their respective service providers, be liable to You or
                  any third party for any use, interruption, delay or inability
                  to use the software, lost revenues or profits, delays,
                  interruption or loss of services, business or goodwill, loss
                  or corruption of data, loss resulting from system or system
                  service failure, malfunction or shutdown, failure to
                  accurately transfer, read or transmit information, failure to
                  update or provide correct information, system incompatibility
                  or provision of incorrect compatibility information or
                  breaches in system security, or for any consequential,
                  incidental, indirect, exemplary, special or punitive damages,
                  whether arising out of or in connection with this agreement,
                  breach of contract, tort (including negligence) or otherwise,
                  regardless of whether such damages were foreseeable and
                  whether or not We were advised of the possibility of such
                  damages.
                </div>
                <div className="text">
                  9.4. In no event shall Nodeplus or its suppliers be liable for
                  any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising
                  out of the use or inability to use the Site and Services, even
                  if Nodeplus has been notified orally or in writing of the
                  possibility of such damage.
                </div>
                <div className="text">
                  9.5. We make no warranties or representations about the
                  accuracy or completeness of the Site’s content or the content
                  of any websites linked to the site and we will assume no
                  liability or responsibility for any:
                </div>
                <div className="list">
                  errors, mistakes, or inaccuracies of content and materials;
                </div>
                <div className="list">
                  personal injury or property damage, of any nature whatsoever,
                  resulting from your access to and use of the Site or Services;
                </div>
                <div className="list">
                  any unauthorized access to or use of our secure servers and/or
                  any and all personal information and/or financial information
                  stored therein;
                </div>
                <div className="list">
                  any interruption or cessation of transmission to or from the
                  Site or Services;
                </div>
                <div className="list">
                  any bugs, viruses, trojan horses, or the like which may be
                  transmitted to or through the site or to you by any third
                  party, and/or;
                </div>
                <div className="list">
                  any errors or omissions in any content and materials or for
                  any loss or damage of any kind incurred as a result of the use
                  of any content posted, transmitted, or otherwise made
                  available via the Site or Services.
                </div>
                <div className="title_h3">10. Miscellaneous</div>
                <div className="text">
                  10.1. These Terms of Use and any policies or operating rules
                  posted by us on the Site or in respect to the Site constitute
                  the entire agreement and understanding between you and us. Our
                  failure to exercise or enforce any right or provision of these
                  Terms of Use shall not operate as a waiver of such right or
                  provision.
                </div>
                <div className="text">
                  10.2. These Terms of Use operate to the fullest extent
                  permissible by law. We may assign any or all of our rights and
                  obligations to others at any time.
                </div>
                <div className="text">
                  10.3. We shall not be responsible or liable for any loss,
                  damage, delay, or failure to act caused by any cause beyond
                  our reasonable control.
                </div>
                <div className="text">
                  10.4. If any provision or part of a provision of these Terms
                  of Use is determined to be unlawful, void, or unenforceable,
                  that provision or part of the provision is deemed severable
                  from these Terms of Use and does not affect the validity and
                  enforceability of any remaining provisions.
                </div>
                <div className="text">
                  10.5. There is no joint venture, partnership, employment or
                  agency relationship created between you and us as a result of
                  these Terms of Use or use of the Site or Services.
                </div>
                <div className="text">
                  10.6. You agree that these Terms of Use will not be construed
                  against us by virtue of having drafted them. You hereby waive
                  any and all defenses you may have based on the electronic form
                  of these Terms of Use and the lack of signing by the parties
                  hereto to execute these Terms of Use.
                </div>
                <div className="text">
                  10.7. Any matters relating to this Agreement, including but
                  not limited to the establishment, validity, execution,
                  alteration, interpretation and resolution of this Agreement,
                  shall apply to the laws of the United Kingdom.
                </div>
                <div className="text">
                  10.8. If there is any conflict or dispute between you and
                  Nodeplus, both parties should try to seek a solution through
                  negotiations. If the attempt is unsuccessful, both parties
                  should agree to resolve the disagreement or dispute through
                  the court of competent jurisdiction in Seychelles. If there is
                  any dispute or dispute between you and Nodeplus, it should be
                  settled through negotiation in the first place. If the
                  negotiation is unsuccessful, both parties agree to submit the
                  conflict or dispute to the London Court of International
                  Arbitration.
                </div>
                <div className="text">
                  10.9. In no event shall any claim, action, or proceeding
                  brought by either Party related in any way to the Site or
                  Services be commenced more than 1 (one) year after the cause
                  of action arose, or, if different, when knowledge of the cause
                  of action should have been reasonably obtained by the
                  infringed upon Party; for the purposes of these Terms,
                  knowledge of information on a Blockchain is considered to have
                  been reasonably obtained when it is included in a block that
                  is accepted by the requisite number of Validators necessary to
                  be considered consensus according to the customs and technical
                  conditions of that Blockchain.
                </div>
                <div className="end">Latest update: February 10, 2023</div>
                <div className="end">EOSIO.SINGAPORE PTE. LTD.</div>
              </div>
            </div>
          </Content>
          <AppFooter id="footer"></AppFooter>
        </Layout>
      </div>
    );
  }
}

export default Privacy;
