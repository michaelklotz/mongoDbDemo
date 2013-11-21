

package com.mongodemo.MongoDemo

import static org.junit.Assert.*

import org.junit.Before
import org.junit.Test

import com.mongodb.BasicDBObject
import com.mongodb.DB
import com.mongodb.DBCollection
import com.mongodb.DBCursor
import com.mongodb.MongoClient

class MongoCrudAppTest {

	MongoClient mongoClient
	DB db
	DBCollection collection

	@Before
	public void setup() {
		mongoClient = new MongoClient( "localhost" , 27017 )
		db = mongoClient.getDB("movies")
		collection = db.getCollection("movies")
	}

	@Test
	public void testAll() {
		testRead()
		testCreate()
		testUpdate()
		testRemove()
	}

	@Test
	public void testRead() {

		BasicDBObject query = new BasicDBObject()
		BasicDBObject fieldsToReturn = new BasicDBObject()

		// query for pg 13
		query.append("mpaa_rating","PG-13")

		// only want the title
		fieldsToReturn.append("title", 1)
		fieldsToReturn.append("_id", 0)

		// get the results
		DBCursor cursor = collection.find(query, fieldsToReturn)

		// put results in java-friendly array, not cursor
		List<String> resultingMovieTitles = new ArrayList<String>()
		while(cursor.hasNext()) {
			resultingMovieTitles.add(cursor.next().get("title"))
		}

		// assert we got back the movies we expected
		assert resultingMovieTitles.contains("Capitan Phillips")
		assert resultingMovieTitles.contains("Forrest Gump")
		assert resultingMovieTitles.contains("Titanic")

//		System.out.println("Query Argument: " + query.toString())
//		System.out.println("Fields To Return Argument: " + fieldsToReturn.toString())
//		while(cursor.hasNext()) {
//			System.out.println(cursor.next())
//		}

	}

	//@Test
	public void testCreate() {

		// create the anchorman movie
		createAnchorman()

		BasicDBObject query = new BasicDBObject()
		query.append("title","Anchorman")

		// get the results
		DBCursor cursor = collection.find(query)

		// check it's actually there
		assert cursor.count() == 1

//		while(cursor.hasNext()) {
//			System.out.println("Anchorman JSON: " + cursor.next())
//		}
	}

	//@Test
	public void testUpdate() {

		// create the anchorman movie
		updateAnchorman()

		BasicDBObject query = new BasicDBObject()
		query.append("title","Anchorman")

		// get the results
		DBCursor cursor = collection.find(query)

		// check it's actually there
		assert cursor.count() == 1

//		while(cursor.hasNext()) {
//			System.out.println("Anchorman JSON: " + cursor.next())
//		}
	}

	//@Test
	public void testRemove() {

		// remove the anchorman movie
		removeAnchorman()

		BasicDBObject query = new BasicDBObject()
		query.append("title","Anchorman")

		// get the results
		DBCursor cursor = collection.find(query)

		// check it's not there
		assert cursor.count() == 0

	}

	/*
	 * Create the movie anchorman in the database
	 */
	public void createAnchorman() {

		BasicDBObject document = new BasicDBObject()
		document.put("title", "Anchorman")
		document.put("year", 2003)
		document.put("genres", ["Comedy", "Classics"])
		document.put("mpaa_rating", "R")
		document.put("runtime", 94)
		document.put("studio", "Fox Searchlight")

		BasicDBObject ratingsSubDocument = new BasicDBObject()
		ratingsSubDocument.put("critics_rating", 66)
		ratingsSubDocument.put("critics_score", "Just Okay")
		ratingsSubDocument.put("audience_score", 83)

		BasicDBObject directorSubDocument = new BasicDBObject()
		directorSubDocument.put("name", "Adam McKay")

		BasicDBObject willFerrellSubDocument = new BasicDBObject()
		willFerrellSubDocument.put("name", "Will Ferrell")
		willFerrellSubDocument.put("characters", ["Ron Burgundy"])

		BasicDBObject christinaApplegateSubDocument = new BasicDBObject()
		christinaApplegateSubDocument.put("name", "Christina Applegate")
		christinaApplegateSubDocument.put("characters", ["Veronica Corningstone"])

		BasicDBObject paulRuddSubDocument = new BasicDBObject()
		paulRuddSubDocument.put("name", "Paul Rudd")
		paulRuddSubDocument.put("characters", ["Brian Fantana"])

		document.put("ratings", ratingsSubDocument)
		document.put("abridged_directors", [directorSubDocument])
		document.put("abridged_cast", [willFerrellSubDocument, christinaApplegateSubDocument, paulRuddSubDocument])

		//System.out.println(document.toString())
		collection.insert(document)

	}

	/*
	 * Update the movie anchorman in the database
	 */
	public void updateAnchorman() {

		// update the rating using dot notation
		BasicDBObject doc = new BasicDBObject()
		doc.append("\$set", new BasicDBObject().append("ratings.critics_rating", 80))
		BasicDBObject query = new BasicDBObject().append("title", "Anchorman")

		collection.update(query, doc)
	}


	/*
	 * Remove the movie anchorman in the database
	 */
	public void removeAnchorman() {

		BasicDBObject document = new BasicDBObject()
		document.put("title", "Anchorman")

		//System.out.println(document.toString())
		collection.remove(document)

	}
}
