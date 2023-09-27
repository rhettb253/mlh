import "./About.css";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBAccordion, 
  MDBAccordionItem
} from "mdb-react-ui-kit";

function About() {
  return (
    <MDBContainer>
      <MDBAccordion initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle='BIO & ASSERTIONS'>
            Desiring to help people and build lasting relationships is at the
            heart of all I do. Born and raised in the Tri-Cities area of Eastern
            Washington, with a lifelong passion for volunteering in the
            community and a love for the real estate industry, I am a
            neighborhood expert and real estate advisor serving Benton and
            Franklin counties. I lived in Seattle for ten years and spent the
            last five as a real estate agent for Windermere in West Seattle. As
            of January, I decided to move back to my roots and switched
            brokerages to join eXp, which will still allow me to service friends
            or family in Seattle area when needed, but turn my main focus back
            to my hometown of Tri-Cities.
            <br />
            <br />
            Whether selling or buying a home, it is one of the largest
            transactions you will make in your life, and that is not something I
            take lightly. If you consider my local knowledge, combined with
            negotiation skills, strategic marketing, financial savviness,
            project management experience, enthusiastic energy, and meticulous
            eye for detail, not to mention my track record of closed sales and
            happy clients, I believe I offer the complete package to help you
            make this large and important transaction a successful one.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle='TOP VALUE PROMISES'>
            <strong>
              Here are my 5 promises to help you get the most value at the top
              of the range:
            </strong>
            <br />
            <br />
            1. We’ll walk through your property together and I’ll show you ways
            to enhance the value so you get top dollar for it.
            <br />
            <br />
            2. I’ll help you with a pricing strategy – not pricing it too high
            so you scare buyers away or too low so you leave money on the table.
            <br />
            <br />
            3. My marketing plan will give you maximum exposure, so we attract
            more buyers and more contracts. The more buyers and contracts you
            have, the higher your property will sell.
            <br />
            <br />
            4. I’ll help you negotiate the best contract. Negotiation is an
            important skill in any market.
            <br />
            <br />
            5. I’m your transaction manager. There are a lot of moving parts. My
            job is to handle those parts so your contract closes on time.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle='PROCESSES'>
            <strong>
              {" "}
              If we work together, the following items will be arranged for you
              or provided:
            </strong>
            <br />
            <br />
            <strong>Pre-inspection:</strong> An inspector will go through your
            home to see if there are any areas of concern. Knowing any repairs
            needed helps you decide what you’d like to fix before selling, and
            also will make buyers feel more confident and secure in knowing what
            they are buying. Either way, I believe this puts you in the
            strongest negotiating position possible, but it isn’t necessary to
            sell your home. This is paid by the seller if they choose to move
            forward with pre-inspection.
            <br />
            <br />
            <strong>Staging consultation:</strong> I will walk through your home
            and offer suggestions to ensure your home shows in the most
            favorable light. This could mean putting things in storage, moving
            furniture around or minor repair work. We will work together to plan
            and prioritize the items you would like to complete before we begin
            marketing your home. During this meeting, we can discuss whether you
            would like to pay for staging or list it as a blank canvas.
            <br />
            <br />
            <strong>Landscaping:</strong> Creating a positive first impression
            is critical. We will provide a curb appeal consultation that is done
            with recommendations for yard or exterior improvements.
            <br />
            <br />
            <strong>HD Photography:</strong> Research shows that multiple, high
            quality photos sell houses. Your home will be photographed using HD
            technology for our marketing materials and on-line photo gallery. I
            happily pay for professional photography for my clients because,
            back to first impressions, I believe excellent photos bring buyers
            as most homes are first seen online before someone decides to take a
            tour or come to an open house.
            <br />
            <br />
            <strong>Concierge Service:</strong> If there is a need for
            additional work, we can help with access to our service providers
            for every aspect of preparing your home for sale. This may be just
            getting bids or finding a specialized contractor for repairs or
            other needs.
            <br />
            <br />
            <strong>Preliminary Title Search:</strong> I order a pre-title
            commitment to reduce your risk of any title problems at closing.
            <br />
            <br />
            <strong>Open Houses:</strong> Holding an open allows any neighbors
            and prospective buyers to come and look at the home. The open house
            will be advertised on Washington’s Multiple Listing Service for
            agents across the state to see, as well as many online websites such
            as Zillow, Redfin, Trulia, and more. I will hold your home open on
            the days that we agree upon, but typically Friday, Saturday, and
            Sunday during the first week on the market. After the second week, I
            will hold it open at least one day of the weekend, or again, as
            often as makes sense based on buyer traffic.
            <br />
            <br />
            <strong>Online Advertising:</strong> I will publish your home on all
            forms of social media accounts (Pinterest, Instagram, Snapchat,
            Facebook, Google+, Zillow), eXp’s social Workplace website, and via
            inter-office marketing.
            <br />
            <br />
            <strong>Feature Cards:</strong> Feature Cards are signs that point
            out the not so obvious features that a buyer may miss, (i.e., “Don’t
            miss the hidden storage behind the stairs” or “New Roof”). I provide
            these cards and place them around the property to help guide buyers.
            If you would rather them not be hung that is also completely fine.
            <br />
            <br />
            <strong>Property Profile:</strong> We prepare an information book or
            “Homebook” containing information a buyer will want to know
            including “Facts and Figures”, “What You Love..”, the area, schools,
            average utilities, homeowners association (if there is one), the
            pre-inspection, disclosures, contracts, potential bids, etc. This
            information will give buyers the confidence to write a contract.
            <br />
            <br />
            <strong>Showing Follow-up:</strong> I will follow-up with agents who
            have either shown or previewed your home by making a phone call, and
            then sending them a personalized email if we don’t connect over the
            phone. This feedback can help us judge their client’s level of
            interest, our pricing, and adjust our strategy if needed to stay
            competitive.
            <br />
            <br />
            <strong>Agent Tour:</strong> Fellow eXp agents in the area will tour
            the home and not only be exposed to your home to decide if they have
            clients that may be interested, but they will also provide us with
            feedback regarding price, staging, condition of the home, and other
            items. Promote to Top Agents in Your Area: We present your property
            to the top-selling agents in the area. Agents that have sold a
            listing in your neighborhood within the last six months may have
            buyers waiting. We want the most active agents to get special
            notifications of your home’s availability. I accomplish this through
            phone call and email marketing.
        </MDBAccordionItem>
      </MDBAccordion>
      <div className="bio">
        <h3>Let's Do This!</h3>
        <p className="indent">
          Clients attest that my enthusiasm for the buying and selling process
          is contagious. While financing, staging, negotiating and closing can
          sometimes be a confusing and complicated process, I handle potential
          roadblocks with grace, confidence, and a smile. My persistence, eye
          for aesthetics, and work ethic deliver results!
        </p>
        <p className="indent">
          If you would like to connect my email is labled below or you can
          submit the form at the bottom of my <Link to="/">HOME</Link> page.
        </p>
      </div>
    </MDBContainer>
  );
}

export default About;
